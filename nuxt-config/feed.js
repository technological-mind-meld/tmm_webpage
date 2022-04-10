import { getEpisodes } from '../utils/episode'
import { BASE_URL, RssFeedConstants } from '../utils/constants/app-constants'

export const feed = {
  path: '/feed.xml',
  async create (feed) {
    feed.options = {
      title: RssFeedConstants.title,
      link: BASE_URL,
      description: RssFeedConstants.description
    }

    const episodes = await getEpisodes()
    episodes.forEach((episode) => {
      feed.addItem({
        id: `${episode.season}.${episode.slug}`,
        title: episode.title,
        link: `${BASE_URL}/season/${episode.season}/episode/${episode.slug}/`,
        date: new Date(episode.date)
      })
    })
  },
  cacheTime: 1000 * 60 * 15, // How long should the feed be cached
  type: 'rss2' // Can be: rss2, atom1, json1
}
