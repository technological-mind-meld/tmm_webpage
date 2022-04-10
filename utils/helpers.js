export function getSeasonFromEpisode (episode) {
  return Number(episode.dir.replace('/episodes/', ''))
}
