import React from 'react'

import Head from 'next/head'
// import Link from 'next/link'

import sharedStyles from '@/styles/Shared.module.scss'
// import errorStyles from '@/styles/Error.module.scss'

const Error = () => {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="Page not found" />
      </Head>

      <main className={sharedStyles.main}>
        Error
        {/* <section className={`${sharedStyles.hero} ${errorStyles.hero404}`}>
          <div className={sharedStyles.hero__content}>
            <h1 className={sharedStyles.title}>Page not found</h1>
            <div className={errorStyles.description}>
              <Link href="/">
                <a className={sharedStyles.button__secondary}>Go to homepage</a>
              </Link>
            </div>
          </div>
        </section> */}
      </main>
    </>
  )
}

export default Error
