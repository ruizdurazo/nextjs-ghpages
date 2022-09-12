import React from 'react'
// import { AnimatePresence } from 'framer-motion'

import { AppProps } from 'next/app'

import '@/styles/_globals.scss'

// import { Layout } from '@/components/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    // Global layout
    // <Layout>
    // <AnimatePresence>
    <Component {...pageProps} />
    // </AnimatePresence>
    // </Layout>
  )
}

export default App
