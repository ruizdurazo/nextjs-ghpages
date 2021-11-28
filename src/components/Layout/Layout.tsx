import React from 'react'

// import Head from 'next/head'

// import { Navbar } from '@/components/Navbar'
// import { Footer } from '@/components/Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Head>
        <title>MarketByBitcoin | Stocks priced in Bitcoin and Decred</title>
        <meta name="description" content="Pricing today’s assets in tomorrow’s money" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head> */}

      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Content */}
      {children}

      {/* Footer */}
      {/* <Footer /> */}
    </>
  )
}
