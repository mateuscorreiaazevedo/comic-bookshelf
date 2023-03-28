import * as Popover from '@radix-ui/react-popover'
import React from 'react'

export const PopoverUi = ({ children }: { children: React.ReactNode }) => {
  return (
    <Popover.Portal>
      <Popover.Content className='relative z-40 w-60 py-2 px-4 text-white bg-red-400 dark:bg-zinc-700 rounded-md shadow-md'>
        <Popover.Arrow className="fill-red-400 dark:fill-zinc-700 w-4 h-2" />
        {children}
      </Popover.Content>
    </Popover.Portal>
  )
}
