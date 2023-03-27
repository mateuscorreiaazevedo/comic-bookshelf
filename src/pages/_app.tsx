import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Layout } from '@/main/layout'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  )
}
