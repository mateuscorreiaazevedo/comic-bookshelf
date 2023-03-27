import React from 'react'

type Props = React.LiHTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode
}

export const ItemNav = ({ children, ...rest }: Props) => {
  return (
    <li {...rest} className='w-full px-3 hover:bg-red-300 dark:hover:bg-zinc-600 transition-colors flex items-center justify-start gap-2 cursor-pointer rounded'>
      {children}
    </li>
  )
}
