import Head from 'next/head'
import React from 'react'

export const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <Head>
        <title>Marvel - Comics Bookshelf</title>
      </Head>
      <div>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}
