import { join, resolve, dirname } from 'path'
import { existsSync, mkdirSync, writeFileSync } from 'fs'

import { Podcast } from 'podcast'

import { getEpisodes } from '../utils/episode'
import { BASE_URL } from '../utils/constants/app-constants'

const feedPath = '/podcast.xml'

export default async function () {
  const feed = new Podcast({
    title: '0x4447 Podcast',
    description: 'This is my podcast feed!',
    feedUrl: `${BASE_URL}${feedPath}`,
    siteUrl: BASE_URL,
    // imageUrl: `${BASE_URL}/site-icon.png`,
    imageUrl: 'https://media.rss.com/hello-moss/20220318_060332_57eda3e8c7b478842701a2e72e439c31.jpg',
    author: 'David Gatti',
    language: 'en',
    ttl: 60,
    itunesAuthor: 'David Gatti',
    itunesOwner: { name: 'David Gatti', email: 'office@0x4447.email' },
    itunesExplicit: true,
    itunesImage: 'https://media.rss.com/hello-moss/20220318_060332_57eda3e8c7b478842701a2e72e439c31.jpg'
  })

  const episodes = await getEpisodes()

  episodes.forEach((episode) => {
    feed.addItem({
      title: episode.title,
      url: `${BASE_URL}/episodes/${episode.slug}/`,
      guid: episode.slug,
      date: new Date(episode.date)
      // enclosure: { url: '...', file: 'path-to-file' }, // optional enclosure
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

    console.log('Generated', feedPath)
  })
}
