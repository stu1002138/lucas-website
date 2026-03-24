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

### 新增文章流程

```bash
bun run new-post   # 互動式建立新文章
```

腳本會詢問：category、slug、中英文 title/description、keywords、是否有圖片。

**有圖片時的步驟：**
1. 執行 `bun run new-post`，回答 `y` to "Has images?"
2. 腳本自動建立 `public/img/posts/{year}/{month}/{day}/` 資料夾
3. 將圖片放入該資料夾（建議命名 `01.jpg`, `02.jpg` 依序）
4. 在 markdown 中使用：`![說明](/img/posts/{year}/{month}/{day}/01.jpg)`
5. `bun run dev` 預覽（圖片由 `@nuxt/image` 自動最佳化）

**注意：** 舊文章圖片仍使用 `https://cdn.lucas-chen.website/...`（外部 CDN），新文章建議使用本地路徑。

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

#### Phase 2 — 關鍵字搜尋列 ✅ 已完成
- [x] 建立 `pages/search.vue`：包含搜尋輸入框與即時結果列表（自動 focus，顯示 keyword badges）
- [x] 建立 `composables/useSearch.ts`：封裝 `queryContent` 過濾邏輯（依 title、description、keywords 搜尋）
- [x] 在 `components/Common/Header.vue` 加入搜尋放大鏡 icon（Desktop + Mobile）
- [x] 搜尋支援雙語（依當前 locale 過濾對應語系文章）

#### Phase 3 — 全文搜尋 ✅ 已完成
- [x] 整合 **Fuse.js 7.x**，支援文章內文全文模糊搜尋
- [x] 更新 `composables/useSearch.ts`：遞迴提取 body AST 純文字，加權搜尋（title > keywords > description > body）

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
- `bun run generate` 失敗出現 `write EPIPE` 時，通常是 esbuild binary 被 OOM kill，先執行 `ps aux | grep -E "node|bun" | grep -v grep | awk '{print $2}' | xargs kill -9` 清除殘留程序後再重試
- 清除 `.nuxt` 快取後再 generate，prerender 只會跑出 4 個路由（crawler 無法發現內容路由）。解法：清除快取後先執行 `bunx nuxt prepare` 再 `bun run generate`
