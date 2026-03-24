# Lucas's Blog

個人部落格與作品集，使用 Nuxt 3 + Vue 3 建置，部署於 GitHub Pages。

- **網址**：https://www.lucas-chen.website
- **語系**：繁體中文（預設）、English
- **套件管理**：Bun

---

## 常用指令

```bash
bun install          # 安裝相依套件
bun run dev          # 啟動開發伺服器（http://localhost:3000）
bun run generate     # 靜態生成（輸出至 .output/public）
bun run preview      # 本地預覽生產版本
bun run deploy       # 部署至 GitHub Pages
bun run new-post     # 互動式新增文章
```

---

## 新增文章流程

### 1. 執行腳本

```bash
bun run new-post
```

腳本會依序詢問：

| 問題 | 說明 |
|------|------|
| Category | `tech-dev` / `travel` / `food` / `note` |
| Slug | 英文小寫 + 連字號，例如 `my-first-post` |
| Chinese title | 文章中文標題 |
| English title | 文章英文標題 |
| Chinese description | 中文摘要（用於 SEO） |
| English description | 英文摘要（用於 SEO） |
| Keywords | 逗號分隔，例如 `Vue 3, Nuxt, 技術` |
| Has images? | `y` 或 `n` |
| Post date | 格式 `YYYY-MM-DD`，直接 Enter 使用當天日期 |

腳本會建立：
- `content/{category}/{year}/{month}/{day}/{slug}.md`（中文）
- `content/en/{category}/{year}/{month}/{day}/{slug}.md`（英文）
- `public/img/posts/{year}/{month}/{day}/`（有圖片時）

### 2. 新增圖片（若有）

將圖片放入腳本建立的資料夾，例如：

```
public/img/posts/2024/06/15/
├── 01.jpg
├── 02.jpg
└── 03.jpg
```

在 markdown 中引用：

```markdown
![圖片說明](/img/posts/2024/06/15/01.jpg)
```

> 圖片由 `@nuxt/image` 自動最佳化，無需手動壓縮。

### 3. 撰寫內容

- 中英文各寫一份（內容可不同，語氣可依語系調整）
- 圖片路徑使用絕對路徑 `/img/posts/...`

### 4. 本地預覽

```bash
bun run dev
```

開啟 http://localhost:3000 確認文章顯示正常。

---

## 打包與部署流程

### 標準流程

```bash
bun run generate   # 靜態生成
bun run deploy     # 部署至 GitHub Pages
```

### 清除快取後的流程

若清除了 `.nuxt` 資料夾，需先 prepare 否則 prerender 只會產出 4 個路由：

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

---

## 圖片存放規則

| 類型 | 路徑 |
|------|------|
| 文章圖片（新） | `public/img/posts/{year}/{month}/{day}/` |
| Logo / 頭像等 | `public/img/` |

> 舊文章圖片已從外部 CDN 遷移至 `public/img/posts/`，統一使用本地路徑。
