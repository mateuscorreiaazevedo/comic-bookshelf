import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from '@/main/ui'
import React from 'react'

export function Card (props: ComicResponse) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className='flex shadow-md flex-col items-center bg-red-200 p-4 h-72 w-48 rounded-md'>
          <img src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
          alt={props.thumbnail.title} className='w-40 h-56 object-contain' />
          <h2 className='truncate w-44'>{props.title}</h2>
        </div>
      </Dialog.Trigger>
      <Modal>
        <img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt={props.thumbnail.title} />
        <h2>{props.title}</h2>
      </Modal>
    </Dialog.Root>
  )
}
