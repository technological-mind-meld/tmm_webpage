import { getEpisodes } from '../utils/episode'

export const feed = {
  path: '/feed.xml',
  async create (feed) {
    feed.options = {
      title: '0x4447 Podcast',
      link: 'https://podcast.0x4447.com',
      description: 'This is my podcast feed!'
    }

    const episodes = await getEpisodes()
    episodes.forEach((episode) => {
      feed.addItem({
        id: episode.id,
        title: episode.title,
        link: `https://podcast.0x4447.com/episodes/${episode.slug}`,
        description: episode.description,
        content: episode.description
      })
    })
  },
  cacheTime: 1000 * 60 * 15, // How long should the feed be cached
  type: 'rss2' // Can be: rss2, atom1, json1
}
