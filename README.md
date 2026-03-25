# Lucas's Blog

個人部落格與作品集，使用 Nuxt 3 + Vue 3 建置，部署於 GitHub Pages。

- **網址**：https://www.lucas-chen.website
- **語系**：繁體中文（預設）、English
- **套件管理**：Bun

---

## 常用指令

```bash
bun install                 # 安裝相依套件
bun run dev                 # 啟動開發伺服器（http://localhost:3000）
bun run generate            # 靜態生成（輸出至 .output/public）
bun run preview             # 本地預覽生產版本
bun run deploy              # 部署至 GitHub Pages
bun run publish <slug>      # 一鍵發布草稿文章
```

---

## 新增文章流程

### 1. 建立草稿資料夾

在 `drafts/` 下建立以 slug 命名的資料夾，slug 即為文章的 URL 路徑：

```
drafts/
  my-article-slug/
    post.md        ← 唯一需要編輯的檔案
    01.jpg         ← 圖片直接放這裡（非必要）
    02.jpg
```

### 2. 編輯 post.md

複製 `drafts/_template/post.md` 作為起點：

```markdown
---
category: tech-dev
date: 2026-03-25
keywords: [Vue 3, Nuxt 3, TypeScript]
title_zh: 中文標題
title_en: English Title
description_zh: 中文摘要，用於 SEO 顯示。
description_en: English description for SEO.
---

<!-- zh:start -->

中文內容...

![圖片說明](01.jpg)

<!-- zh:end -->

<!-- en:start -->

English content...

![Image description](01.jpg)

<!-- en:end -->
```

| 欄位 | 說明 |
|------|------|
| `category` | `tech-dev` / `travel` / `food` / `note` |
| `date` | 格式 `YYYY-MM-DD` |
| `keywords` | 陣列格式，例如 `[Vue 3, Nuxt 3]` |
| `title_zh` / `title_en` | 中英文標題 |
| `description_zh` / `description_en` | 中英文摘要（SEO 用） |

圖片只需寫**檔名**（如 `01.jpg`），腳本會自動轉換為正確的絕對路徑。

### 3. 一鍵發布

```bash
bun run publish my-article-slug
```

腳本自動完成：
- 圖片複製至 `public/img/posts/{date}/`
- 圖片路徑轉換（`01.jpg` → `/img/posts/.../01.jpg`）
- 產生 `content/{category}/{date}/{slug}.md`（中文）
- 產生 `content/en/{category}/{date}/{slug}.md`（英文）

### 4. 本地預覽

```bash
bun run dev
```

開啟 http://localhost:3000 確認文章顯示正常，即可進行部署。

---

## 打包與部署流程

### 標準流程

```bash
bun run generate   # 靜態生成
bun run deploy     # 部署至 GitHub Pages
```

### 清除快取後的流程

若清除了 `.nuxt` 資料夾，需先 prepare，否則 prerender 只會產出 4 個路由：

```bash
bunx nuxt prepare  # 重建 .nuxt 型別與設定
bun run generate   # 靜態生成
bun run deploy     # 部署
```

### 部署前檢查清單

1. `bun run dev` — 確認頁面無錯誤
2. `bun run generate` — 確認無 ERROR（WARN 可忽略），預期產出 300+ 個路由
3. 確認 `public/CNAME` 內容為 `www.lucas-chen.website`（單行，無多餘文字）
4. 確認 `.output/public/CNAME` 與上面一致
5. `bun run deploy` — 輸出 `Published` 即成功

---

## 已知問題

| 問題 | 原因 | 解法 |
|------|------|------|
| `generate` 只產出 4 個路由 | 清除 `.nuxt` 後未重建型別 | 先執行 `bunx nuxt prepare` |
| `generate` 出現 `write EPIPE` | esbuild 被系統 OOM kill | 關閉其他耗記憶體程式，重試 |
| 部署後顯示 GitHub 404 | `public/CNAME` 內容錯誤 | 確認 CNAME 只有一行 `www.lucas-chen.website` |
| 更新圖片後畫面未變 | IPX 快取殘留 | 刪除 `.output/public/_ipx` 後重新 generate |

---

## 圖片存放規則

| 類型 | 路徑 |
|------|------|
| 文章圖片 | `public/img/posts/{year}/{month}/{day}/` |
| Logo / 頭像等 | `public/img/` |

> 圖片由 `@nuxt/image` 自動最佳化，無需手動壓縮。
