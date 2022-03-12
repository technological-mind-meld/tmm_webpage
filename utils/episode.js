export const getEpisodeRoutes = async () => {
  const { $content } = require('@nuxt/content')

  const episodes = await $content('episodes').only(['slug']).fetch()
  return episodes.map(episode => `/episodes/${episode.slug}/`)
}

export const getEpisodes = async () => {
  const { $content } = require('@nuxt/content')

  return await $content('episodes').only(['id', 'title', 'description', 'slug']).fetch()
}
