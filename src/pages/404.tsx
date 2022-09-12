import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
// import { useRouter } from 'next/router'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

import sharedStyles from '@/styles/Shared.module.scss'
import errorStyles from '@/styles/Error.module.scss'

// import texts from 'textos'
import useTextsGenerator from 'src/hooks/useTextsGenerator'
import { useRedirect } from 'src/hooks/useRedirect'

const Error = () => {
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
      <Head>
        <title key="title">{t.meta.error.pageTitle}</title>
        <meta key="meta:title" name="title" content={t.meta.error.pageTitle} />
        <meta key="meta:description" name="description" content={t.meta.error.pageDescription} />
        <meta key="theme-color" name="theme-color" content="#ffffff" />
        {/* 32px */}
        <link key="icon" rel="icon" type="image/png" href="/favicon.png" />
        {/* 180px */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </Head>

      {/* Navbar */}
      <Navbar t={t} />

      {/* Content */}
      <main className={errorStyles['main']}>
        {/* Error */}
        <section className={`${sharedStyles['section']} ${errorStyles['error']}`}>
          <div className={`${errorStyles['content']}`}>
            <h1 className={errorStyles['title']}>{t.error.title}</h1>

            <div className={errorStyles['description']}>
              <Link href="/">
                <a className={errorStyles['button']}>
                  <span>{t.error.button}</span>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer t={t} showScrollToTop={false} />
    </>
  )
}

export default Error
