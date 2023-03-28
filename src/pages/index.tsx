import { Card, CardList, comicService, GridCards, List } from '@/modules/comics'
import { Hero, notificationHelper, useView, View } from '@/modules/core'
import { useInView } from 'react-intersection-observer'
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
    <>
      <Hero />
      <div className="mt-2 container mx-auto">
        <h1 className="text-4xl text-center font-bold">Comics Bookshelf</h1>
        <article className="flex flex-col items-center w-full">
          <View toggleView={toggleView} view={view} />
          {view === 'grid' && (
            <GridCards>
              {comics?.map(comic => (
                <Card {...comic} key={comic.id} />
              ))}
            </GridCards>
          )}
          {view === 'list' && (
            <List>
              {comics.map(comic => (
                <CardList {...comic} key={comic.id} />
              ))}
            </List>
          )}
          <div ref={ref} />
          {loading && <Loading />}
        </article>
      </div>
    </>
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
