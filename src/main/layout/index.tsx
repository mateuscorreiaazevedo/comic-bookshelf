import { Footer, Header } from '@/modules/core'
import Head from 'next/head'
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

          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
