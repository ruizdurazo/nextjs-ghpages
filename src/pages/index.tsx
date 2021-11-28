import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
// import dynamic from 'next/dynamic'
// import Image from 'next/image'

import { Image } from '@/components/Image'
// const Image = dynamic(() => import('../components/Image'))

import styles from '../styles/Home.module.scss'

import texts from '../../textos.js'

import hero from '../../public/images/imagen-prueba.jpeg'
// @ts-ignore
import heroP from '../../public/images/imagen-prueba.jpeg?lqip'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title key="title">{texts.deutsch.meta.pageTitle}</title>
        <meta key="description" name="description" content={texts.deutsch.meta.pageDescription} />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          {/* <Image alt="" src={hero} placeholder="blur" width={700} height={475} /> */}
          {/* <Image alt="" src={hero} width={700} height={475} /> */}
          {/* <img src={`/images/imagen-prueba.jpeg`} alt="" width={700} height={475} /> */}

          {/* <Image src="../../public/images/imagen-prueba.jpeg" alt="" width={700} height={475} /> */}
          <Image src={hero} placeholder={heroP} alt="" width={700} height={475} />
          {/* 
        <div className={styles.test}>
          <img
            src={require('../../public/images/imagen-prueba.jpeg?lqip')}
            width={700}
            height={475}
            style={{ filter: 'blur(25px)' }}
          />
          <img src={hero} alt="" width={700} height={475} />
        </div> */}

          <h1 className={styles.title}>
            <div>{texts.deutsch.hero.title.top}</div>
            <div>{texts.deutsch.hero.title.bottom}</div>
          </h1>

          <div className={styles.description}>
            {texts.deutsch.hero.intro.map((introText: any, index) => {
              let out
              let match = introText.match(/\*[^]*?\*/g)
              if (match) {
                match.forEach((i: any) => {
                  let mark_element = '<span>' + i.slice(1, -1) + '</span>'
                  introText = introText.replace(i, mark_element)
                  out = introText
                })
              } else {
                out = introText
              }

              return <p key={index} dangerouslySetInnerHTML={{ __html: out }} />
            })}
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
