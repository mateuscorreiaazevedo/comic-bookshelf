import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { BsX } from 'react-icons/bs'

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 fixed inset-0 backdrop-blur-md z-40" />
      <Dialog.Content className="fixed bg-zinc-200 dark:bg-zinc-700 z-40 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>{children}</div>
        <Dialog.Close className='w-8 h-8 absolute top-1.5 right-1.5'>
          <BsX className='fill-zinc-900 text-3xl hover:bg-red-300 active:fill-white active:bg-red-400 rounded-full transition-colors' />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
