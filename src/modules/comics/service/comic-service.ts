import { Service } from '@/modules/core'

class ComicService extends Service {
  async getAll (offset = 0) {
    const response = await this.request<ResponseComics>({
      url: '/comics',
      params: {
        offset
      }
    })

    switch (response.code) {
      case 200:
        return response.body?.data
      case 401:
        throw new Error(response.body?.message)
    }
  }
}

export const comicService = new ComicService()
