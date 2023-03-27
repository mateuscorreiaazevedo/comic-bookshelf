import { Service } from '@/modules/core'

class ComicService extends Service {
  async getAll (offset = 0) {
    const response = await this.request<ResponseComics>({
      url: '/comics',
      params: {
        ...(offset && { offset })
      }
    })

    switch (response.code) {
      case 200:
        return response.body?.data
      case 401:
        throw new Error(response.body?.message)
      case 403:
        throw new Error(response.body?.message)
      case 405:
        throw new Error(response.body?.message)
      case 409:
        throw new Error(response.body?.message)
      default:
        throw new Error('Erro no Sistema')
    }
  }
}

export const comicService = new ComicService()
