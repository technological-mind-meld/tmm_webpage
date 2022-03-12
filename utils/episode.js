export const getEpisodeRoutes = async () => {
  const { $content } = require('@nuxt/content')

  const episodes = await $content('episodes').only(['slug']).fetch()
  return episodes.map(episode => `/episodes/${episode.slug}/`)
}
