import { Service } from '@/modules/core'

class ComicService extends Service {
  async getAll () {
    const response = await this.request({
      url: '/comics',
      params: {
        offset: 20
      }
    })

    return response.body
  }
}

export const comicService = new ComicService()
