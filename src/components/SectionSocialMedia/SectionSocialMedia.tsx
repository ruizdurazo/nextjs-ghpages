import React from 'react'

import IconInstagram from '../../assets/instagram.svg'
import IconFacebook from '../../assets/facebook.svg'
import IconYouTube from '../../assets/youtube.svg'

import sharedStyles from '@/styles/Shared.module.scss'
import styles from './SectionSocialMedia.module.scss'

import { Image } from '@/components/Image'

import { parseParagraph, parseTitle } from '@/utils/parseTexts'
import { motion } from 'framer-motion'

interface SectionSocialMediaProps {
  t: TranslationWithImages
}

export const SectionSocialMedia = ({ t }: SectionSocialMediaProps) => {
  //
  // Template
  //

  return (
    <>
      {/* Section */}
      <section id="social" className={`${sharedStyles['section']} ${styles['social']}`}>
        {/* Title */}
        <h2 dangerouslySetInnerHTML={{ __html: parseTitle(t.socialMedia.title) }} />

        {/* Container */}
        <div className={`${styles['container']}`}>
          {/* Text */}
          {t.socialMedia.description.length > 0 && (
            <div className={`${styles['text']}`}>
              {t.socialMedia.description.map((text: any, index) => {
                return <p key={index} dangerouslySetInnerHTML={{ __html: parseParagraph(text) }} />
              })}
            </div>
          )}

          {/* Links */}
          <div className={`${styles['links']}`}>
            <a
              href={t.socialMedia.linkInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles['link']} ${styles['link--instagram']}`}
            >
              <IconInstagram />
              <div className={`${styles['link__label']}`}>Instagram</div>
            </a>
            <a
              href={t.socialMedia.linkFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles['link']} ${styles['link--facebook']}`}
            >
              <IconFacebook />
              <div className={`${styles['link__label']}`}>Facebook</div>
            </a>
            <a
              href={t.socialMedia.linkYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles['link']} ${styles['link--youtube']}`}
            >
              <IconYouTube />
              <div className={`${styles['link__label']}`}>YouTube</div>
            </a>
          </div>

          {/* Gallery */}
          <div className={`${styles['gallery']}`}>
            {t.images.socialMedia.map((imageSrc: any, index) => {
              return (
                <div key={index} className={`${styles['gallery__image']}`}>
                  <motion.div
                    //
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={`/images/social/${imageSrc}`}
                      placeholder={`social/${imageSrc}`}
                      // placeholder={`/images/social/${imageSrc}?lqip`}
                      alt=""
                      width={340}
                      height={340}
                    />
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
