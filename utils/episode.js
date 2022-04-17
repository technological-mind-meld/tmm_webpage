import { getSeasonFromEpisode } from './helpers'

export const getEpisodeRoutes = async () => {
  const { $content } = require('@nuxt/content')

  const routes = []
  const episodes = await $content('episodes', { deep: true }).only(['slug', 'dir']).fetch()

  episodes.forEach((episode) => {
    const season = getSeasonFromEpisode(episode)
    const seasonRoute = `/season/${season}/`
    const episodeRoute = `/season/${season}/episode/${episode.slug}/`

    if (!routes.includes(seasonRoute)) {
      routes.push(seasonRoute)
    }

    routes.push(episodeRoute)
  })

  return routes
}

export const getEpisodes = async () => {
  const { $content } = require('@nuxt/content')

  let episodes = await $content('episodes', { deep: true }).sortBy('date', 'desc').fetch()
  episodes = episodes.map(episode => ({ ...episode, season: getSeasonFromEpisode(episode) }))
  return episodes
}
