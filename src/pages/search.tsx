import { Fade, notificationHelper, useDebounce, useView, View } from '@/modules/core'
import { Card, CardList, comicService, GridCards, List } from '@/modules/comics'
import { useInView } from 'react-intersection-observer'
import { BsSearch } from 'react-icons/bs'
import { GetStaticProps } from 'next'
import React from 'react'
import { Loading } from '@/main/ui'

interface Props {
  data: ComicResponse[]
}

export default function Search ({ data }: Props) {
  const [loadingSearch, setLoadingSearch] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [comics, setComics] = React.useState(data)
  const [search, setSearch] = React.useState('')
  const { debouncedValue } = useDebounce<string>(search)
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

  React.useEffect(() => {
    if (debouncedValue.length) {
      (async () => {
        setLoadingSearch(true)
        try {
          const response = await comicService.getAll(0, debouncedValue)
          setComics(response!.results)
          setOffset(0)
        } catch (error) {
          notificationHelper((error as any).message)
        } finally {
          setLoadingSearch(false)
        }
      })()
    }
  }, [debouncedValue])

  return (
    <div className="pt-20">
      <Fade />
      <article className="container mx-auto my-10">
        <section>
          <label className="bg-zinc-400 text-lg dark:bg-black flex items-center justify-center py-2 rounded-md px-10 gap-6">
            <BsSearch className="text-2xl" />
            <input
              className="bg-transparent w-full outline-none placeholder:text-zinc-600 placeholder:italic"
              placeholder="Buscar HQ"
              onChange={e => setSearch(e.target.value)}
            />
          </label>
        </section>
        <section className="mt-32 flex flex-col min-h-screen items-center w-full">
          {comics.length === 0 && <h2 className='font-bold'>Nenhuma HQ encontrada</h2>}
          {loadingSearch
            ? (
            <>Carregando HQs...</>
              )
            : (
            <>
              <View toggleView={toggleView} view={view} />
              {view === 'grid' && (
                <GridCards>
                  {comics.map(comic => (
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
            </>
              )}
          {loading && <Loading />}
        </section>
        <div ref={ref} />
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
