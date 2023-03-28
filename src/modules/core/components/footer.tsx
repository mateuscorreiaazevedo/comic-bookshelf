import React from 'react'

export function Footer () {
  return (
    <footer className='w-full h-20 bg-red-600 dark:bg-zinc-800'>
      <div className='container mx-auto flex items-center justify-between h-[8vh] text-2xl'>
        <p className='font-bold'>&copy;Marvel - 2023</p>
        <a href='https://mateusdev.com.br' target='_blank' rel="noreferrer" className='font-bold'>
          mateus.dev
        </a>
      </div>
    </footer>
  )
}
