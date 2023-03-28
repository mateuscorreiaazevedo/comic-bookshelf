import { BsCartCheck } from 'react-icons/bs'
import Link from 'next/link'
import React from 'react'

export const CardModal = (props: ComicResponse) => {
  return (
    <div className="flex gap-2 flex-col md:flex-row overflow-auto w-[90vw]">
      <img
        src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
        alt={props.thumbnail.title}
        className="h-[90vh] max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-l-md object-contain"
      />
      <div className="flex flex-grow items-stretch flex-col pr-10 w-full overflow-y-auto h-[90vh] scrollbar-thin">
          <div className="flex flex-col pb-4">
            <h1 className="text-3xl font-bold">{props.title}</h1>
            <div
              className="text-justify text-zinc-500 dark:text-zinc-300 max-h-max px-2 overflow-y-auto scrollbar-thin scrollbar-track-transparent"
              dangerouslySetInnerHTML={{ __html: props.description }}
            />
            <div className="flex flex-col dark:border-white border-b-2 border-b-red-600 my-2 py-2">
              {props.creators.items.length > 0 && (
                <div className="border-t-2 border-t-red-600">
                  <h3 className="font-bold text-xl items-baseline justify-between">Creator(s)</h3>
                  <p className="text-zinc-500 dark:text-zinc-200 text-justify overflow-y-auto max-h-20 scrollbar-none">
                    {props.creators.items.map(({ name }) => name).join(', ')}.
                  </p>
                </div>
              )}
              {props.pageCount > 0 && (
                <p className="mt-4 text-right italic font-bold text-red-600 dark:text-white">
                  {props.pageCount} {props.pageCount > 1 ? 'pages' : 'page'}
                </p>
              )}
            </div>
            {!!props.images.length && (
              <>
                <h3 className='text-2xl font-bold text-red-700 dark:text-white'>Images</h3>
                <div className="grid grid-cols-4 py-4 gap-3">
                  {props.images.map(image => (
                    <img className="w-32 object-contain max-h-40" src={`${image.path}.${image.extension}`} alt={props.title} key={image.path} />
                  ))}
                </div>
              </>
            )}
          </div>
          <Link href={`/checkout/${props.id}`}>
            <button className="mb-6 py-2 flex items-center gap-2 justify-center text-lg hover:bg-green-500 transition-colors bg-green-600 text-white font-bold rounded-md w-full">
              <BsCartCheck className="text-2xl" /> Check Out
            </button>
          </Link>
      </div>
    </div>
  )
}
