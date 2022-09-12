import React from 'react'

import Head from 'next/head'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

import useTextsGenerator from 'src/hooks/useTextsGenerator'
import { useRedirect } from 'src/hooks/useRedirect'

interface LayoutProps {
  children: React.ReactNode
  refs?: any
}

export const Layout = ({ children, refs }: LayoutProps) => {
  //
  // Router
  //

  const locale = useRedirect()

  const t = useTextsGenerator(locale)

  //
  // Template
  //

  return (
    <>
      {/* Head */}
      <Head>
        <title key="title">{t.meta.home.pageTitle}</title>
        <meta key="meta:title" name="title" content={t.meta.home.pageTitle} />
        <meta key="meta:description" name="description" content={t.meta.home.pageDescription} />
        <meta key="theme-color" name="theme-color" content="#ffffff" />
        {/* 32px */}
        {/* <link key="icon" rel="icon" type="image/png" href="/favicon.png" /> */}
        <link key="icon" rel="icon" type="image/png" href="/nextjs-ghpages/favicon.png" />
        {/* 180px */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" /> */}
        <link rel="apple-touch-icon" href="/nextjs-ghpages/apple-touch-icon.png" sizes="180x180" />
        {/* Open Graph / Facebook */}
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:url" property="og:url" content="https://bailarico.ch/" />
        <meta key="og:title" property="og:title" content={t.meta.home.pageTitle} />
        <meta
          key="og:description"
          property="og:description"
          content={t.meta.home.pageDescription}
        />
        <meta
          key="og:image"
          property="og:image"
          // content={`https://bailarico.ch/${t.images.socialShare}`}
          content={`https://ruizdurazo.github.io/nextjs-ghpages/${t.images.socialShare}`}
        />
        {/* Twitter */}
        <meta key="twitter:card" property="twitter:card" content="summary_large_image" />
        <meta key="twitter:url" property="twitter:url" content="https://bailarico.ch/" />
        <meta key="twitter:title" property="twitter:title" content={t.meta.home.pageTitle} />
        <meta
          key="twitter:description"
          property="twitter:description"
          content={t.meta.home.pageDescription}
        />
        <meta
          key="twitter:image"
          property="twitter:image"
          // content={`https://bailarico.ch/${t.images.socialShare}`}
          content={`https://ruizdurazo.github.io/nextjs-ghpages/${t.images.socialShare}`}
        />
      </Head>

      {/* Navbar */}
      <Navbar t={t} refs={refs} />

      {/* Content */}
      {children}

      {/* Footer */}
      <Footer t={t} />
    </>
  )
}
