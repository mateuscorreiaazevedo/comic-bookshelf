import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from '@/main/ui'
import React from 'react'
import { CardModal } from './card-modal'

export function Card (props: ComicResponse) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className='flex shadow-md flex-col items-center bg-red-100 dark:bg-zinc-700 p-4 h-72 w-48 rounded-md hover:scale-105 duration-300 transition-all hover:bg-red-200 dark:hover:bg-zinc-600'>
          <img
            src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
            alt={props.thumbnail.title}
            className='w-40 h-56 object-contain'
          />
          <h2 className='truncate w-44 text-red-800 dark:text-zinc-100 font-bold uppercase'>{props.title}</h2>
        </div>
      </Dialog.Trigger>
      <Modal>
        <CardModal {...props} />
      </Modal>
    </Dialog.Root>
  )
}
