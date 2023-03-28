import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from '@/main/ui'
import React from 'react'

export function CardList (props: ComicResponse) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="flex shadow-md items-start justify-start bg-red-100 dark:bg-zinc-700 p-4 w-full rounded-md gap-2 hover:scale-105 transition-all duration-300 dark:hover:bg-zinc-600 hover:bg-red-200">
          <img
            src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
            alt={props.thumbnail.title}
            className="w-20 h-20 object-contain"
          />
          <div className='flex flex-col justify-start'>
            <h2 className="text-left text-2xl font-semibold">{props.title}</h2>
            <p className='truncate max-w-3xl text-zinc-500 dark:text-zinc-400'>{props.description}</p>
          </div>
        </div>
      </Dialog.Trigger>
      <Modal>
        <h1>{props.title}</h1>
        <img
          className="w-80 object-contain"
          src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
          alt={props.thumbnail.title}
        />
      </Modal>
    </Dialog.Root>
  )
}
