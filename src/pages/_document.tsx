import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="https://cdn.worldvectorlogo.com/logos/captain-america-shield.svg" type="image/x-icon" />
      </Head>
      <body className='w-full min-h-screen bg-teal-50 text-zinc-800 dark:bg-zinc-900 dark:text-white scrollbar-thin scrollbar-thumb-red-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
