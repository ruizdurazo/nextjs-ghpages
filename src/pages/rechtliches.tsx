import React from 'react'

import type { NextPage } from 'next'

import { Layout } from '@/components/Layout'

import styles from '@/styles/Legal.module.scss'

import { parseParagraph } from '@/utils/parseTexts'

import useTextsGenerator from 'src/hooks/useTextsGenerator'
import { useRedirect } from 'src/hooks/useRedirect'

const Legal: NextPage = () => {
  //
  // Hooks
  //

  const locale = useRedirect()

  const t = useTextsGenerator(locale)

  //
  // Template
  //

  return (
    <>
      <Layout>
        <div className={styles['container']}>
          <main className={styles['main']}>
            {/* Legal */}
            <div className={`${styles['legal']}`}>
              <h1 className={`${styles['title']}`}>{t.legal.title}</h1>

              {/* Text */}
              {t.legal.sections.map((legalText: any, legalIndex: number) => {
                return (
                  <div key={legalIndex} className={`${styles['section']}`}>
                    <h2 className={`${styles['section__title']}`}>{legalText.title}</h2>
                    <div className={`${styles['section__text']}`}>
                      {legalText.text.map((text: any, index: number) => {
                        return (
                          <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: parseParagraph(text) }}
                          />
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </main>
        </div>
      </Layout>
    </>
  )
}

export default Legal
