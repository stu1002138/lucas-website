import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, copyFileSync } from 'node:fs'
import { join, extname, basename } from 'node:path'

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'])

// ── helpers ──────────────────────────────────────────────────────────────────

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) throw new Error('找不到 frontmatter（需要以 --- 開頭）')

  const fm = {}
  for (const line of match[1].split(/\r?\n/)) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    const val = line.slice(colonIdx + 1).trim()
    if (val.startsWith('[') && val.endsWith(']')) {
      fm[key] = val.slice(1, -1).split(',').map(v => v.trim()).filter(Boolean)
    } else {
      fm[key] = val.replace(/^["']|["']$/g, '')
    }
  }
  return { fm, body: match[2] }
}

function extractSection(body, lang) {
  const re = new RegExp(`<!--\\s*${lang}:start\\s*-->([\\s\\S]*?)<!--\\s*${lang}:end\\s*-->`)
  const match = body.match(re)
  if (!match) throw new Error(`找不到 <!-- ${lang}:start --> ... <!-- ${lang}:end --> 區塊`)
  return match[1].trim()
}

function replaceImagePaths(content, imgPathPrefix) {
  // 只轉換相對路徑（不動 http:// 或 / 開頭的）
  return content.replace(/!\[([^\]]*)\]\((?!https?:\/\/)(?!\/)(.*?)\)/g, (_, alt, file) => {
    return `![${alt}](${imgPathPrefix}${file.trim()})`
  })
}

function parseDate(input) {
  const match = input.trim().match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/)
  if (!match) throw new Error(`日期格式錯誤：${input}，需要 YYYY-MM-DD`)
  const [, y, m, d] = match
  return {
    year: y,
    month: m.padStart(2, '0'),
    day: d.padStart(2, '0'),
    dateStr: `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`,
  }
}

// ── main ─────────────────────────────────────────────────────────────────────

const CATEGORIES = ['tech-dev', 'travel', 'food', 'note']

const arg = process.argv[2]
if (!arg) {
  console.error('用法: bun run publish <slug 或 drafts/slug 路徑>')
  process.exit(1)
}

// 支援直接傳 slug 或完整路徑
const draftDir = arg.startsWith('drafts/') || arg.startsWith('./drafts/')
  ? join(process.cwd(), arg)
  : join(process.cwd(), 'drafts', arg)

const slug = basename(draftDir)
const postFile = join(draftDir, 'post.md')

if (!existsSync(draftDir)) {
  console.error(`找不到資料夾：${draftDir}`)
  process.exit(1)
}
if (!existsSync(postFile)) {
  console.error(`找不到 post.md：${postFile}`)
  process.exit(1)
}

const raw = readFileSync(postFile, 'utf-8')
const { fm, body } = parseFrontmatter(raw)

// ── validate frontmatter ──────────────────────────────────────────────────────
const required = ['category', 'date', 'title_zh', 'title_en', 'description_zh', 'description_en']
for (const key of required) {
  if (!fm[key]) throw new Error(`frontmatter 缺少欄位：${key}`)
}
if (!CATEGORIES.includes(fm.category)) {
  throw new Error(`category 需為：${CATEGORIES.join(', ')}`)
}

const { year, month, day, dateStr } = parseDate(fm.date)
const keywords = Array.isArray(fm.keywords) ? fm.keywords : []
const keywordsYaml = `[${keywords.join(', ')}]`

// ── extract content sections ──────────────────────────────────────────────────
const zhBody = extractSection(body, 'zh')
const enBody = extractSection(body, 'en')

// ── copy images ───────────────────────────────────────────────────────────────
const imgFiles = readdirSync(draftDir).filter(f => IMAGE_EXTS.has(extname(f).toLowerCase()))
const imgPathPrefix = `/img/posts/${year}/${month}/${day}/`
const imgDir = join(process.cwd(), 'public', 'img', 'posts', year, month, day)

if (imgFiles.length > 0) {
  mkdirSync(imgDir, { recursive: true })
  for (const img of imgFiles) {
    copyFileSync(join(draftDir, img), join(imgDir, img))
    console.log(`  copied: ${img} → public/img/posts/${year}/${month}/${day}/`)
  }
}

// ── generate output md ────────────────────────────────────────────────────────
const zhContent = replaceImagePaths(zhBody, imgPathPrefix)
const enContent = replaceImagePaths(enBody, imgPathPrefix)

const zhMd = `---
title: "${fm.title_zh}"
description: "${fm.description_zh}"
date: ${dateStr}
keywords: ${keywordsYaml}
---

${zhContent}
`

const enMd = `---
title: "${fm.title_en}"
description: "${fm.description_en}"
date: ${dateStr}
keywords: ${keywordsYaml}
---

${enContent}
`

// ── write files ───────────────────────────────────────────────────────────────
const contentRoot = join(process.cwd(), 'content')
const zhDir = join(contentRoot, fm.category, year, month, day)
const enDir = join(contentRoot, 'en', fm.category, year, month, day)
const zhFile = join(zhDir, `${slug}.md`)
const enFile = join(enDir, `${slug}.md`)

if (existsSync(zhFile) || existsSync(enFile)) {
  console.error('文章已存在！若要覆蓋請先手動刪除：')
  console.error(`  ${zhFile}`)
  console.error(`  ${enFile}`)
  process.exit(1)
}

mkdirSync(zhDir, { recursive: true })
mkdirSync(enDir, { recursive: true })
writeFileSync(zhFile, zhMd, 'utf-8')
writeFileSync(enFile, enMd, 'utf-8')

console.log('\n✓ 文章已發布：')
console.log(`  ${zhFile}`)
console.log(`  ${enFile}`)
if (imgFiles.length > 0) {
  console.log(`\n✓ 圖片已複製至：`)
  console.log(`  public/img/posts/${year}/${month}/${day}/`)
}
console.log('\n下一步：bun run dev 預覽，確認後 bun run generate && bun run deploy\n')
