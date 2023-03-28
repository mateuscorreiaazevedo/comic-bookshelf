import React from 'react'

export const CardModal = (props: ComicResponse) => {
  return (
    <div className="flex gap-2 w-[80vw]">
      <img
        src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
        alt={props.thumbnail.title}
        className="h-[80vh] max-w-lg rounded-l-md object-contain"
      />
      <div className="flex flex-col pt-6 pr-10 w-full overflow-y-auto h-[80vh] scrollbar-thin py-4">
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <h2 className="text-justify font-semibold text-zinc-500 dark:text-zinc-300">{props.description}</h2>
        <div className="flex flex-col border-y border-red-600 dark:border-white  my-2 py-2">
          <h3 className="font-bold text-xl items-baseline justify-between">Creators</h3>
          <p className="text-zinc-500 dark:text-zinc-200 text-justify">
            {props.creators.items.map(({ name }) => name).join(', ')}.
          </p>
          {props.pageCount > 1 && (
            <p className="mt-4 text-right italic font-bold text-red-600 dark:text-white">
              {props.pageCount} {props.pageCount > 1 ? 'pages' : 'page'}
            </p>
          )}
          {props.format}
        </div>
      </div>
    </div>
  )
}
