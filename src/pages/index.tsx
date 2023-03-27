import { Card, comicService } from '@/modules/comics'
import { GetStaticProps } from 'next'
import React from 'react'

interface Props {
  comics: any
}

export default function Home ({ comics }: Props) {
  return (
    <div className="mt-2 container mx-auto">
      <h1 className="text-4xl text-center font-bold">
        <span className="bg-red-600 text-white px-1">Marvel</span>&rsquo;s Comics Bookshelf
      </h1>
      <article className="flex justify-center w-full">
        <div className="mt-6 grid grid-cols-5 gap-4">
          {comics?.map((comic: any) => (
            <Card {...comic} key={comic.id} />
          ))}
        </div>
      </article>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const comics = await comicService.getAll()

  return {
    props: {
      comics: comics!.results
    }
  }
}
