import { Card, CardList, comicService, GridCards } from '@/modules/comics'
import { notificationHelper, useView } from '@/modules/core'
import { useInView } from 'react-intersection-observer'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { GetStaticProps } from 'next'
import { Loading } from '@/main/ui'
import React from 'react'

interface Props {
  data: ComicResponse[]
}

export default function Home ({ data }: Props) {
  const [comics, setComics] = React.useState<ComicResponse[]>(data)
  const [loading, setLoading] = React.useState(false)
  const [offset, setOffset] = React.useState(0)
  const { ref, inView, entry } = useInView()
  const { toggleView, view } = useView()

  React.useEffect(() => {
    if (entry) {
      (async () => {
        setLoading(true)
        try {
          const response = await comicService.getAll(offset + 20)
          setComics([...comics, ...response!.results])
          setOffset(offset + 20)
        } catch (error) {
          notificationHelper((error as any).message)
        } finally {
          setLoading(false)
        }
      })()
    }
  }, [inView])

  return (
    <div className="mt-2 container mx-auto">
      <h1 className="text-4xl text-center font-bold">Comics Bookshelf</h1>
      <article className="flex flex-col items-center w-full">
        <section className="w-full flex justify-end gap-4 mr-10">
          Modo de visualização:
          <div className="flex gap-6 mt-1">
            <span className={`cursor-pointer ${view === 'grid' ? 'text-red-500' : ''}`}>
              <BsFillGrid1X2Fill onClick={() => toggleView('grid')} />
            </span>
            <span className={`cursor-pointer ${view === 'list' ? 'text-red-500' : ''}`}>
              <FaThList onClick={() => toggleView('list')} />
            </span>
          </div>
        </section>
        {view === 'grid' && (
          <GridCards>
            {comics?.map(comic => (
              <Card {...comic} key={comic.id} />
            ))}
          </GridCards>
        )}
        {view === 'list' && (
          <div className="mt-2 flex flex-col gap-2 items-stretch justify-center w-full">
            {comics.map(comic => (
              <CardList {...comic} key={comic.id} />
            ))}
          </div>
        )}
        <div ref={ref} className="h-4 w-full" />
        {loading && <Loading />}
      </article>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const comics = await comicService.getAll()

  return {
    props: {
      data: comics!.results
    },
    revalidate: 60 * 4 // 4 hours
  }
}
