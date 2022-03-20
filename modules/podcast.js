import { join, resolve, dirname } from 'path'
import { existsSync, mkdirSync, writeFileSync } from 'fs'

import { Podcast } from 'podcast'

import { getEpisodes } from '../utils/episode'
import { BASE_URL, RssFeedConstants } from '../utils/constants/app-constants'

const feedPath = '/podcast.xml'

export default async function () {
  const feed = new Podcast({
    title: RssFeedConstants.title,
    description: RssFeedConstants.description,
    feedUrl: `${BASE_URL}${feedPath}`,
    siteUrl: BASE_URL,
    imageUrl: `${BASE_URL}/podcast.jpg`,
    author: RssFeedConstants.author,
    language: 'en',
    itunesOwner: { name: RssFeedConstants.owner.name, email: RssFeedConstants.owner.email },
    itunesExplicit: false,
    itunesImage: `${BASE_URL}/podcast.jpg`
  })

  const episodes = await getEpisodes()

  episodes.forEach((episode) => {
    feed.addItem({
      title: episode.title,
      url: `${BASE_URL}/episodes/${episode.slug}/`,
      guid: episode.slug,
      date: new Date(episode.date)
      /*
      enclosure: {
        url: '<audio-file-url>',
        type: 'audio/mpeg'
      }
      */
    })
  })

  const xml = feed.buildXml()

  this.nuxt.hook('generate:done', () => {
    const xmlGeneratePath = resolve(this.options.rootDir, join(this.options.generate.dir, feedPath))
    const xmlGenerateDirPath = dirname(xmlGeneratePath)

    if (!existsSync(xmlGenerateDirPath)) {
      mkdirSync(xmlGenerateDirPath, { recursive: true })
    }
    writeFileSync(xmlGeneratePath, xml)
  })

  this.addServerMiddleware({
    path: feedPath,
    handler (req, res, next) {
      try {
        res.setHeader('Content-Type', 'application/rss+xml')
        res.end(xml)
      } catch (err) {
        next(err)
      }
    }
  })
}
