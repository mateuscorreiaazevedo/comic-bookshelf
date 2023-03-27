type ComicResponse = {
  id: number
  title: string
  issueNumber: number
  description: string
  isbn: string
  issn: string
  thumbnail: {
    path: string
    extension: string
    title: string
  }
  images: {
    paths: string
    extension: string
  }[]
  format: string
  diamondCode: string
  creators: {
    available: number
    items: {
      name: string
      role: string
    }[]
  }
  series: { name: string }
  pageCount: number
  prices?: number[]
  textObjects: {
    language: string
    text: string
    type: string
  }[]
}

type DataResponse = {
  count: number
  limit: number
  offset: number
  results: ComicResponse[]
  total: number
}

type ResponseComics = {
  code: number
  copyright: string
  data: DataResponse
  etag: string
  status: string
}

type ErrorComics = {
  code: string
  message: string
}
