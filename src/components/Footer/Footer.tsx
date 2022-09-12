import React from 'react'

import IconArrowUp from '../../assets/arrow-up.svg'

import { LinkComponent } from '@/components/Link'

import styles from './Footer.module.scss'

interface FooterProps {
  showScrollToTop?: boolean
  t: Translation
}

export const Footer = ({ showScrollToTop = true, t }: FooterProps) => {
  //
  // Methods
  //

  const scrollToTop = (e: any) => {
    e.target.blur()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  //
  // Template
  //

  return (
    <>
      {/* Footer */}
      <footer className={`${styles['footer']}`}>
        {showScrollToTop && (
          <div className={`${styles['green']}`}>
            {/* Button: To top */}
            <button type="button" onClick={(e) => scrollToTop(e)}>
              <span>{t.footer.buttonScrollToTop}</span>
              <IconArrowUp />
            </button>
          </div>
        )}

        {/* Content */}
        <div className={`${styles['details']}`}>
          {/* Copyright */}
          <div className={`${styles['details--left']}`}>
            <span>
              © {new Date().getFullYear()} {t.footer.copyright}
            </span>
          </div>

          {/* Made in */}
          <div>
            <span className={`${styles['made-in--desktop']}`}>{t.footer.madeInDesktop}</span>
            <span className={`${styles['made-in--mobile']}`}>{t.footer.madeInMobile}</span>
          </div>

          {/* Legal */}
          <div className={`${styles['details--right']}`}>
            <LinkComponent href={'/rechtliches'}>
              {/* <a> */}
              <span>{t.footer.linkToLegal}</span>
              {/* </a> */}
            </LinkComponent>
          </div>
        </div>
      </footer>
    </>
  )
}
