import { Card, comicService, GridCards } from '@/modules/comics'
import { useInView } from 'react-intersection-observer'
import { notificationHelper } from '@/modules/core'
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
        <GridCards>
          {comics?.map(comic => (
            <Card {...comic} key={comic.id} />
          ))}
        </GridCards>
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
