import { join, resolve, dirname } from 'path'
import { existsSync, mkdirSync, writeFileSync } from 'fs'

import { BASE_URL } from '../utils/constants/app-constants'
import { getEpisodes } from '../utils/episode'

const apiPath = '/api/shows.json'

export default async function () {
  const episodes = await getEpisodes().catch(() => [])

  const apiData = episodes.map((episode) => {
    const youtubeProvider = episode.media.find(media => media.provider === 'youtube')
    const youtubeId = youtubeProvider ? youtubeProvider.url.split('v=')[1] : ''

    return {
      title: episode.title,
      thumbnail: `https://i3.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
      url: `${BASE_URL}/season/${episode.season}/episode/${episode.slug}/`
    }
  })

  this.nuxt.hook('generate:done', () => {
    const jsonGeneratePath = resolve(this.options.rootDir, join(this.options.generate.dir, apiPath))
    const jsonGenerateDirPath = dirname(jsonGeneratePath)

    if (!existsSync(jsonGenerateDirPath)) {
      mkdirSync(jsonGenerateDirPath, { recursive: true })
    }
    writeFileSync(jsonGeneratePath, JSON.stringify(apiData))
  })

  this.addServerMiddleware({
    path: apiPath,
    handler (req, res, next) {
      try {
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(apiData))
        res.end()
      } catch (err) {
        next(err)
      }
    }
  })
}
