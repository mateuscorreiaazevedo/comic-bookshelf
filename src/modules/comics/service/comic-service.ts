import { service } from '@/modules/core'

class ComicService {
  async getAll (offset?: number, title?: string) {
    const response = await service.request<{data: DataResponse, message?: string}>({
      url: '/comics',
      params: {
        ...(offset && { offset }),
        ...(title && { title })
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

  async getComic (id: string) {
    const response = await service.request<{data: DataResponse, message?: string}>({
      url: `/comics/${id}`,
    })

    switch (response.code) {
      case 200:
        return response.body?.data
      case 401:
        throw new Error(response.body?.message)
      case 403:
        throw new Error(response.body?.message)
      case 404:
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
