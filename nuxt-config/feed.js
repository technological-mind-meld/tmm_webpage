import { getEpisodes } from '../utils/episode'
import { BASE_URL } from '../utils/constants/app-constants'

export const feed = {
  path: '/feed.xml',
  async create (feed) {
    feed.options = {
      title: '0x4447 Podcast',
      link: BASE_URL,
      description: 'This is my podcast feed!'
    }

    const episodes = await getEpisodes()
    episodes.forEach((episode) => {
      feed.addItem({
        id: episode.id,
        title: episode.title,
        link: `${BASE_URL}/episodes/${episode.slug}/`,
        description: episode.description,
        content: episode.description
      })
    })
  },
  cacheTime: 1000 * 60 * 15, // How long should the feed be cached
  type: 'rss2' // Can be: rss2, atom1, json1
}
