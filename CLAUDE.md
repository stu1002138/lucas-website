# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/portfolio site built with **Nuxt 3** (Vue 3), using **Bun** as the package manager. Bilingual (Traditional Chinese zh-TW default, English en-US). Deployed to **GitHub Pages** as a static site.

## Commands

```bash
bun install              # Install dependencies
bun run dev              # Start dev server (localhost:3000)
bun run generate         # Static site generation (pre-renders all pages)
bun run preview          # Preview production build locally
bun run deploy           # Deploy to GitHub Pages (.output/public)
```

No test suite is configured.

## Architecture

### Content System
All articles are Markdown files in `content/` managed by `@nuxt/content`. Content is organized by category and date:
- `content/{category}/{year}/{month}/{day}/{slug}.md` — Chinese (default)
- `content/en/{category}/{year}/{month}/{day}/{slug}.md` — English

Categories: `tech-dev`, `travel`, `food`, `note`

### Routing (pages/)
- `index.vue` — Portfolio/about homepage
- `archives.vue` — All articles listing
- `category/[name].vue` — Category listing page
- `[...slug].vue` — Catch-all route rendering markdown content via `@nuxt/content`

### i18n Strategy
Uses `@nuxtjs/i18n` with `prefix_except_default` — Chinese pages have no URL prefix, English pages use `/en/`. Locale files in `locales/zh-TW.json` and `locales/en-US.json`. In components, use `localePath()` for navigation and `switchLocalePath()` for language switching.

### Styling
UnoCSS (Tailwind-compatible atomic CSS). Global styles in `assets/css/main.css`. Components use scoped styles with utility classes. Dark/light theme managed via `composables/useColorTheme.ts` and Nuxt UI's `useColorMode()`.

### Key Modules
- `@nuxt/content` — Markdown content querying and rendering
- `@nuxt/ui` — UI component library
- `@unocss/nuxt` — Atomic CSS engine
- `@nuxtjs/i18n` — Internationalization
- `@nuxtjs/sitemap` — Auto-generated sitemap
- `@nuxt/image` — Image optimization
- `nuxt-security` — Security headers

### Layout & Components
Single `layouts/default.vue` wrapping all pages (Header + slot + Footer). Reusable content components in `components/content/` (Card, Keywords, PageIndex). Article pages include Utterances (GitHub-based) comments.

---

## TODO

> 注意：本站為靜態站（GitHub Pages），無法使用 Server API，所有搜尋邏輯須在客戶端完成。

### 搜尋與 Tag 功能優化

**現況分析：**
- `keywords` 已在各篇文章 frontmatter 中定義（陣列格式）
- `components/content/Keywords.vue` 已實作顯示為 badge，但不可點擊
- 目前無任何搜尋功能、Tag 過濾頁面、搜尋列

**待辦項目（建議優先順序）：**

#### Phase 1 — Tag 過濾 ✅ 已完成
- [x] 建立 `pages/tag/[name].vue`：列出含有該 keyword 的所有文章（使用 `queryContent().where({ keywords: { $contains: name } })`）
- [x] 更新 `pages/[...slug].vue`：將每個 keyword badge 改為可點擊的 `<NuxtLink>`，連結至 `/tag/[keyword]`
- [x] 新增 i18n 字串：`locales/zh-TW.json` 和 `locales/en-US.json` 加入 `tag.notFound` 欄位

#### Phase 2 — 關鍵字搜尋列（中優先）
- [ ] 建立 `pages/search.vue`：包含搜尋輸入框與即時結果列表
- [ ] 建立 `composables/useSearch.ts`：封裝 `queryContent` 過濾邏輯（依 title、description、keywords 搜尋）
- [ ] 在 `components/Common/Header.vue` 加入搜尋入口（icon 或搜尋列）
- [ ] 搜尋支援雙語（依當前 locale 過濾對應語系文章）

#### Phase 3 — 全文搜尋（低優先／選擇性）
- [ ] 評估整合 **Fuse.js**（輕量客戶端模糊搜尋），支援文章內文全文搜尋
- [ ] 或整合 **Nuxt Content 內建搜尋**（`documentDriven` + search index）

**技術備註：**
- Tag 頁面需配合 i18n，中文路徑 `/tag/xxx`，英文 `/en/tag/xxx`
- `queryContent` 支援 `.where({ keywords: { $contains: 'keyword' } })` 過濾
- Keywords component 改 link 時需用 `localePath('/tag/' + keyword)`

---

## Deploy 檢查流程

每次完成 Phase 後，依序執行以下步驟確認到 deploy 順利完成：

1. **`bun run dev`** — 確認 dev server 正常啟動，頁面無報錯
2. **`bun run generate`** — 確認靜態生成成功，無 ERROR（WARN 可忽略）
3. **確認 `public/CNAME`** — 內容必須只有 `www.lucas-chen.website`，不可包含其他路徑或文字
4. **確認 `.output/public/CNAME`** — generate 後檢查輸出目錄的 CNAME 與 `public/CNAME` 一致
5. **`bun run deploy`** — 部署至 GitHub Pages，輸出 `Published` 即成功

**已知問題紀錄：**
- `@nuxtjs/sitemap@6.0.0-beta.4` 有 bug 導致 generate 失敗（`canonicalUrlResolver is not a function`），已升級至 `7.6.0` 解決
- `public/CNAME` 曾被汙染（多包本機絕對路徑），導致 GitHub Pages 顯示 404，每次 deploy 前須確認內容正確
