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
    path: string
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
  modified: Date
}

type DataResponse = {
  count: number
  limit: number
  offset: number
  results: ComicResponse[]
  total: number
}
