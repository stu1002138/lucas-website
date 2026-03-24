import Fuse from 'fuse.js'

// Recursively extract plain text from @nuxt/content body AST
function extractText(node: any): string {
  if (!node) return ''
  if (node.type === 'text') return node.value || ''
  if (Array.isArray(node.children)) {
    return node.children.map(extractText).join(' ')
  }
  return ''
}

export const useSearch = () => {
  const { locale } = useI18n()
  const query = ref('')

  const { data: allArticles } = useAsyncData('search-articles', () =>
    queryContent().find()
  )

  const fuseInstance = computed(() => {
    if (!allArticles.value) return null

    const localeArticles = allArticles.value.filter((article) =>
      locale.value === 'en'
        ? article._path?.includes('/en')
        : !article._path?.includes('/en') && article._path !== '/'
    )

    const docs = localeArticles.map(article => ({
      title: article.title || '',
      description: article.description || '',
      keywords: article.keywords || [],
      body: extractText(article.body),
      _path: article._path,
    }))

    return new Fuse(docs, {
      keys: [
        { name: 'title', weight: 3 },
        { name: 'keywords', weight: 2 },
        { name: 'description', weight: 1.5 },
        { name: 'body', weight: 1 },
      ],
      threshold: 0.4,
      includeScore: true,
      ignoreLocation: true,
      minMatchCharLength: 2,
    })
  })

  const results = computed(() => {
    if (!query.value.trim() || !fuseInstance.value) return []
    return fuseInstance.value
      .search(query.value)
      .map(r => r.item)
  })

  return { query, results }
}
