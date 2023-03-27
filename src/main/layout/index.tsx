import { Header } from '@/modules/core'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <Head>
        <title>Marvel - Comics Bookshelf</title>
      </Head>
      <div>
        <Header />
        <main>
          <Image
            src='https://cdn.worldvectorlogo.com/logos/marvel.svg'
            alt='marvel logo'
            width={100}
            height={100}
            loading='lazy'
            className='w-full object-cover shadow-lg'
          />
          {children}
        </main>
      </div>
    </>
  )
}
