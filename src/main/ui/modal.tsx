import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 fixed inset-0" />
      <Dialog.Content className="fixed bg-zinc-200 p-4 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md">
        <div>{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
