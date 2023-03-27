import { Loading } from '@/main/ui'
import { comicService } from '@/modules/comics'
import { notificationHelper } from '@/modules/core'
import React from 'react'

export default function Home () {
  const [comics, setComics] = React.useState<ComicResponse[]>([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const response = await comicService.getAll()
        setComics(response!.results)
      } catch (error) {
        notificationHelper((error as any).message)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <div className="mt-2 container mx-auto">
      <h1 className="text-4xl text-center font-bold">
        <span className="bg-red-600 text-white px-1">Marvel</span>&rsquo;s Comics Bookshelf
      </h1>
      {loading
        ? (
        <Loading />
          )
        : (
        <div className="mt-6 grid grid-cols-5 gap-4">
          {comics?.map(comic => (
            <div key={comic.id}>
              <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.thumbnail.title} />
              <p>{comic.title}</p>
            </div>
          ))}
        </div>
          )}
    </div>
  )
}
