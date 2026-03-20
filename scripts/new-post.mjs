import { createInterface } from 'node:readline'
import { mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const rl = createInterface({ input: process.stdin, output: process.stdout })

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve))
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

  const keywords = keywordsInput.split(',').map((k) => k.trim()).filter(Boolean)

  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const dateStr = `${year}-${month}-${day}`

  const contentRoot = join(process.cwd(), 'content')
  const zhDir = join(contentRoot, category, String(year), month, day)
  const enDir = join(contentRoot, 'en', category, String(year), month, day)

  const keywordsYaml = `[${keywords.join(', ')}]`

  const zhContent = `---
title: "${titleZh}"
description: "${descZh}"
date: ${dateStr}
keywords: ${keywordsYaml}
---

`

  const enContent = `---
title: "${titleEn}"
description: "${descEn}"
date: ${dateStr}
keywords: ${keywordsYaml}
---

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

  console.log(`\nCreated:`)
  console.log(`  ${zhFile}`)
  console.log(`  ${enFile}`)
  console.log('\nDone!')

  rl.close()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
