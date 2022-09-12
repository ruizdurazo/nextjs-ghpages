import React from 'react'

import sharedStyles from '@/styles/Shared.module.scss'
import styles from './SectionCourses.module.scss'

import IconDownload from '../../assets/download.svg'

import { Image } from '@/components/Image'

import { parseParagraph, parseTitle } from '@/utils/parseTexts'

interface SectionCoursesProps {
  t: TranslationWithImages
}

export const SectionCourses = ({ t }: SectionCoursesProps) => {
  //
  // Template
  //

  return (
    <>
      {/* Section */}
      <section id="courses" className={`${sharedStyles.section} ${styles.courses}`}>
        {/* Title */}
        <h2 dangerouslySetInnerHTML={{ __html: parseTitle(t.courses.title) }} />

        {/* Container */}
        <div className={`${styles['container']}`}>
          {/* Image */}
          <div className={`${styles['image']}`}>
            <Image
              src={`/images/${t.courses.courses}`}
              placeholder={`${t.courses.courses}`}
              // placeholder={`/images/social/${imageSrc}?lqip`}
              alt=""
              width={800}
              // height={1080}
            />

            {/* Button */}
            {/* <a
              href={`/${t.courses.courses}`}
              target="_blank"
              className={`${styles['pdf-card__button']}`}
            >
              <span>{t.courses.saveCoursesImage}</span>
              <IconDownload />
            </a> */}
          </div>

          {/* Details */}
          <div className={`${styles['content']}`}>
            {/* PDF Card */}
            <div className={`${styles['pdf-card']}`}>
              <div className={`${styles['pdf-card__main']}`}>
                {/* Image */}
                <div className={`${styles['pdf-card__image']}`}>
                  <Image
                    src={`/images/courses-icon.png`}
                    placeholder={`courses-icon.png`}
                    alt=""
                    width={168}
                    height={208}
                  />
                </div>

                {/* Text */}
                <div>
                  <div className={`${styles['pdf-card__title']}`}>{t.courses.pdf.title}</div>
                  <div className={`${styles['pdf-card__description']}`}>
                    {t.courses.pdf.description}
                  </div>
                </div>
              </div>

              {/* Button */}
              <a
                href={`/${t.courses.pdf.file}`}
                target="_blank"
                rel="noreferrer"
                className={`${styles['pdf-card__button']}`}
              >
                <span>{t.courses.pdf.button}</span>
                <IconDownload />
              </a>
            </div>

            {/* Text */}
            <div className={`${styles['details']}`}>
              {/* Registration */}
              <div className={`${styles['detail']}`}>
                {/* Title */}
                <h3>{t.courses.registration.title}</h3>
                <div className={`${styles['text']}`}>
                  {t.courses.registration.text.map((text: any, index) => {
                    return (
                      <p key={index} dangerouslySetInnerHTML={{ __html: parseParagraph(text) }} />
                    )
                  })}
                </div>

                {/* Contact details */}
                <div className={`${styles['info']}`}>
                  {/* Email */}
                  <div className={`${styles['info-item']}`}>
                    <div className={`${styles['label']}`}>{t.contact.labelEmail}</div>
                    <a href={t.contact.linkEmail} target="_blank" rel="noopener noreferrer">
                      <span>{t.contact.emailAddress}</span>
                    </a>
                  </div>
                  {/* Phone */}
                  <div className={`${styles['info-item']}`}>
                    <div className={`${styles['label']}`}>{t.contact.labelPhone}</div>
                    <a href={t.contact.linkPhone} target="_blank" rel="noopener noreferrer">
                      <span>{t.contact.phoneNumber}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className={`${styles['detail']}`}>
                <h3>{t.courses.pricing.title}</h3>
                <div className={`${styles['text']}`}>
                  {t.courses.pricing.text.map((text: any, index) => {
                    return (
                      <p key={index} dangerouslySetInnerHTML={{ __html: parseParagraph(text) }} />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
