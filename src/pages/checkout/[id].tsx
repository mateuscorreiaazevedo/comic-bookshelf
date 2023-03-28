import { GetStaticPaths, GetStaticProps } from 'next'
import { comicService, Map } from '@/modules/comics'
import { useRouter } from 'next/router'
import { Fade, notificationHelper } from '@/modules/core'
import { Loading } from '@/main/ui'
import React from 'react'
import { BsFillSendFill } from 'react-icons/bs'

type Props = {
  comic: ComicResponse
}

export default function Checkout ({ comic }: Props) {
  const { isFallback, push } = useRouter()

  if (isFallback) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loading />
      </div>
    )
  }

  function handleCheckOut () {
    push('/')
    notificationHelper('HQ Enviada com sucesso!', 'success')
  }

  return (
    <div className="pt-[13vh] px-4 h-[91.3vh] pb-[7vh]">
      <Fade />
      <h2 className="text-xl">Carrinho.</h2>
      <div className="flex gap-20 w-full h-full">
        <Map />
        <div className="w-3/4 flex-grow gap-2 justify-between flex flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{comic.title}</h1>
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.thumbnail.title}
                className="w-40 object-contain rounded-xl"
              />
              <div dangerouslySetInnerHTML={{ __html: comic.description }} />
          </div>
          <button
            onClick={handleCheckOut}
            className="py-2 flex items-center gap-2 justify-center text-lg hover:bg-green-500 transition-colors bg-green-600 text-white font-bold rounded-md w-full"
          >
            <BsFillSendFill className="text-2xl" /> Enviar
          </button>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await comicService.getAll()

  const paths = data!.results.map(comic => ({
    params: { id: comic.id.toString() }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const id = ctx.params?.id

  const comic = await comicService.getComic(id as string)

  return {
    props: {
      comic: comic?.results[0]
    }
  }
}
