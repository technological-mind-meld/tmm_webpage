import { getSeasonFromEpisode } from './helpers'

export const getEpisodeRoutes = async () => {
  const { $content } = require('@nuxt/content')

  const episodes = await $content('episodes', { deep: true }).only(['slug', 'dir']).fetch()
  return episodes.map(episode => `/season/${getSeasonFromEpisode(episode)}/episode/${episode.slug}/`)
}

export const getEpisodes = async () => {
  const { $content } = require('@nuxt/content')

  let episodes = await $content('episodes', { deep: true }).sortBy('date', 'desc').fetch()
  episodes = episodes.map(episode => ({ ...episode, season: getSeasonFromEpisode(episode) }))
  return episodes
}
