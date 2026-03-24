export const useSearch = () => {
  const { locale } = useI18n()
  const query = ref('')

  const { data: allArticles } = useAsyncData('search-articles', () =>
    queryContent().only(['title', 'description', 'keywords', '_path']).find()
  )

  const results = computed(() => {
    if (!query.value.trim() || !allArticles.value) return []

    const q = query.value.toLowerCase()

    return allArticles.value.filter((article) => {
      const isCurrentLocale = locale.value === 'en'
        ? article._path?.includes('/en')
        : !article._path?.includes('/en') && article._path !== '/'

      if (!isCurrentLocale) return false

      return (
        article.title?.toLowerCase().includes(q) ||
        article.description?.toLowerCase().includes(q) ||
        article.keywords?.some((k: string) => k.toLowerCase().includes(q))
      )
    })
  })

  return { query, results }
}
