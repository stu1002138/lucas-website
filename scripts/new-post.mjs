import { createInterface } from 'node:readline'
import { mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const rl = createInterface({ input: process.stdin, output: process.stdout })

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve))
}

function parseDate(input) {
  // Accept YYYY-MM-DD or YYYY/MM/DD
  const match = input.trim().match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/)
  if (!match) return null
  const [, y, m, d] = match
  const date = new Date(Number(y), Number(m) - 1, Number(d))
  if (isNaN(date.getTime())) return null
  return {
    year: String(date.getFullYear()),
    month: String(date.getMonth() + 1).padStart(2, '0'),
    day: String(date.getDate()).padStart(2, '0'),
    dateStr: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
  }
}

async function main() {
  console.log('\n--- New Post Generator ---\n')

  const categories = ['tech-dev', 'travel', 'food', 'note']
  console.log('Categories:', categories.join(', '))
  const category = await ask('Category: ')
  if (!categories.includes(category)) {
    console.error(`Invalid category. Choose from: ${categories.join(', ')}`)
    process.exit(1)
  }

  const slug = await ask('Slug (e.g. my-article-name): ')
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    console.error('Slug must be lowercase alphanumeric with hyphens only.')
    process.exit(1)
  }

  const titleZh = await ask('Chinese title: ')
  const titleEn = await ask('English title: ')
  const descZh = await ask('Chinese description: ')
  const descEn = await ask('English description: ')
  const keywordsInput = await ask('Keywords (comma-separated): ')
  const hasImages = (await ask('Has images? (y/n): ')).trim().toLowerCase() === 'y'

  // Date — press Enter to use today
  const now = new Date()
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  const dateInput = await ask(`Post date (YYYY-MM-DD, Enter = ${todayStr}): `)

  let dateParts
  if (!dateInput.trim()) {
    dateParts = {
      year: String(now.getFullYear()),
      month: String(now.getMonth() + 1).padStart(2, '0'),
      day: String(now.getDate()).padStart(2, '0'),
      dateStr: todayStr,
    }
  } else {
    dateParts = parseDate(dateInput)
    if (!dateParts) {
      console.error('Invalid date format. Use YYYY-MM-DD (e.g. 2024-06-15)')
      process.exit(1)
    }
  }

  const { year, month, day, dateStr } = dateParts
  const keywords = keywordsInput.split(',').map((k) => k.trim()).filter(Boolean)

  const contentRoot = join(process.cwd(), 'content')
  const zhDir = join(contentRoot, category, year, month, day)
  const enDir = join(contentRoot, 'en', category, year, month, day)
  const imgDir = join(process.cwd(), 'public', 'img', 'posts', year, month, day)
  const imgPathPrefix = `/img/posts/${year}/${month}/${day}/`

  const keywordsYaml = `[${keywords.join(', ')}]`

  const imageNote = hasImages
    ? `\n<!-- 圖片放在 public${imgPathPrefix} 資料夾，使用方式：
![圖片說明](${imgPathPrefix}01.jpg)
![圖片說明](${imgPathPrefix}02.jpg)
-->\n`
    : ''

  const zhContent = `---
title: "${titleZh}"
description: "${descZh}"
date: ${dateStr}
keywords: ${keywordsYaml}
---
${imageNote}
`

  const enContent = `---
title: "${titleEn}"
description: "${descEn}"
date: ${dateStr}
keywords: ${keywordsYaml}
---
${imageNote}
`

  const zhFile = join(zhDir, `${slug}.md`)
  const enFile = join(enDir, `${slug}.md`)

  if (existsSync(zhFile) || existsSync(enFile)) {
    console.error('File already exists!')
    process.exit(1)
  }

  mkdirSync(zhDir, { recursive: true })
  mkdirSync(enDir, { recursive: true })
  writeFileSync(zhFile, zhContent, 'utf-8')
  writeFileSync(enFile, enContent, 'utf-8')

  if (hasImages) {
    mkdirSync(imgDir, { recursive: true })
  }

  console.log('\nCreated:')
  console.log(`  ${zhFile}`)
  console.log(`  ${enFile}`)

  if (hasImages) {
    console.log(`\nImage folder:`)
    console.log(`  ${imgDir}`)
    console.log(`\nImage path in markdown:`)
    console.log(`  ![說明](${imgPathPrefix}filename.jpg)`)
  }

  console.log('\nDone! Run "bun run dev" to preview.\n')

  rl.close()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
