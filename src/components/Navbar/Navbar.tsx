import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import { LanguageDetector } from 'next-language-detector'

import { LinkComponent } from '@/components/Link'

import IconGlobe from '../../assets/globe.svg'
import Logo from '../../assets/logo.svg'

import styles from './Navbar.module.scss'

import i18nConfig from '../../../next-i18next.config'

import languageDetector from '../../utils/languageDetector'

const detector = languageDetector as LanguageDetector

interface NavbarProps {
  t: Translation
  refs?: any
}

export const Navbar = ({ t, refs }: NavbarProps) => {
  //
  // Router
  //

  const router = useRouter()
  let detectedLng = detector.detect()
  detectedLng = router.asPath === '/' ? 'de' : detector.detect()
  detectedLng = i18nConfig.i18n.locales.includes(router.asPath.slice(1))
    ? router.asPath.slice(1)
    : detectedLng
  // router.asPath === '/' || !i18nConfig.i18n.locales.includes(router.asPath.slice(1))

  //
  // State
  //

  // const homePages = i18nConfig.i18n.locales.map((p) => (p === 'de' ? '/' : `/${p}`))
  const homePages = i18nConfig.i18n.locales.map((p) => `/${p}`)
  homePages.push('/')
  const [isHomePage, setHomePage] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [locale, setLocale] = useState('de')

  //
  // Methods
  //

  //
  const onChangeLanguage = (e: any) => {
    setLocale(e.target.value)

    if (detector.cache) {
      detector.cache(e.target.value)
      // console.log(router.asPath)

      if (e.target.value === 'de') {
        if (i18nConfig.i18n.locales.includes(router.asPath.slice(1))) {
          // router.replace(`/`)
          router.push('/', undefined, { scroll: false })
          return
        }

        if (i18nConfig.i18n.locales.includes(router.asPath.slice(1, 3))) {
          // router.replace(`/`)
          router.push(router.asPath.slice(3), undefined, { scroll: false })
          return
        }

        // router.replace(`${router.asPath}`)
        router.push(router.asPath, undefined, { scroll: false })
        return
      }

      if (i18nConfig.i18n.locales.includes(router.asPath.slice(1, 3))) {
        // router.replace(`/`)
        router.push(`/${e.target.value}${router.asPath.slice(3)}`, undefined, { scroll: false })
        return
      }

      router.push(`/${e.target.value}${router.asPath}`, undefined, { scroll: false })
    }
  }

  //
  const onLinkClicked = (e: any) => {
    e.currentTarget.blur()
  }

  //
  const onScrollLinkClicked = (e: any, i: number) => {
    e.preventDefault()
    e.currentTarget.blur()
    const domRect = refs[i].current.getBoundingClientRect()

    // Subtract the main menu size
    const top = window.scrollY + domRect.top - 74

    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }

  //
  const onHomeClicked = (e: any) => {
    e.currentTarget.blur()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  //
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  //
  // useEffects
  //

  //
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  //
  useEffect(() => {
    if (detectedLng && detectedLng !== locale) setLocale(detectedLng)

    setHomePage(homePages.includes(router.asPath))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, detectedLng])

  //
  // Template
  //

  return (
    <>
      <nav className={`${styles['navbar']} ${scrollPosition > 40 && styles['background']}`}>
        {/* Desktop */}
        <div className={`${styles['content--desktop']} `}>
          {/* Left Menu */}
          <div className={`${styles['menu']} ${styles['menu--left']}`}>
            {/* Link to home page */}
            {!isHomePage && (
              <>
                <div>
                  <LinkComponent
                    href="/"
                    className={styles['menu__item']}
                    onClick={(e) => onLinkClicked(e)}
                  >
                    {t.navbar.linkHomePage}
                  </LinkComponent>
                </div>
              </>
            )}

            {isHomePage && (
              <>
                {/* Courses */}
                <div>
                  <Link href="#courses">
                    <a className={styles['menu__item']} onClick={(e) => onScrollLinkClicked(e, 0)}>
                      {t.navbar.linkCourses}
                    </a>
                  </Link>
                </div>

                {/* Photos */}
                <div>
                  <Link href="#photos">
                    <a className={styles['menu__item']} onClick={(e) => onScrollLinkClicked(e, 1)}>
                      {t.navbar.linkPhotos}
                    </a>
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Logo */}
          <LinkComponent
            href="/"
            aria-label="Home"
            className={styles['logo']}
            onClick={(e) => onHomeClicked(e)}
          >
            <Logo />
          </LinkComponent>

          {/* Right Menu */}
          <div className={`${styles['menu']} ${styles['menu--right']}`}>
            {isHomePage && (
              <>
                {/* Contact */}
                <div>
                  <Link href="#contact">
                    <a
                      className={`${styles['menu__item']}`}
                      onClick={(e) => onScrollLinkClicked(e, 2)}
                    >
                      {t.navbar.linkContact}
                    </a>
                  </Link>
                </div>
              </>
            )}

            {/* Language Select */}
            <div className={`${styles['menu__item']} ${styles['menu__item--select']}`}>
              {/* Select */}
              <select
                onChange={onChangeLanguage}
                // defaultValue={locale}
                value={locale}
                className={`
                ${locale === 'de' && styles['german']} 
                ${locale === 'en' && styles['english']}
                `}
              >
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
              {/* Icon */}
              <IconGlobe />
              {/* Label */}
              {/* <div className={`${styles['menu__item--label']}`}>
                {locale === 'de' ? <>Deutsch</> : <>English</>}
              </div> */}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className={`${styles['content--mobile']}`}>
          {/* Logo */}
          <LinkComponent
            href="/"
            aria-label="Home"
            className={`${styles['logo']}`}
            onClick={(e) => onHomeClicked(e)}
          >
            <Logo />
          </LinkComponent>

          {/* Menu */}
          <div className={`${styles['menu']}`}>
            {/* Language Select */}
            <div className={`${styles['menu__item']} ${styles['menu__item--select']}`}>
              {/* Select */}
              <select
                onChange={onChangeLanguage}
                value={locale}
                className={`
                ${locale === 'de' && styles['german']} 
                ${locale === 'en' && styles['english']}
                `}
              >
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
              {/* Icon */}
              <IconGlobe />
              {/* Label */}
              {/* <div className={`${styles['menu__item--label']}`}>
                {locale === 'de' ? <>Deutsch</> : <>English</>}
              </div> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles['mobile-menu']}`}>
        {isHomePage && (
          <div>
            {/* Courses */}
            <div>
              <Link href="#courses">
                <a className={styles['menu__item']} onClick={(e) => onScrollLinkClicked(e, 0)}>
                  {t.navbar.linkCourses}
                </a>
              </Link>
            </div>

            {/* Photos */}
            <div>
              <Link href="#photos">
                <a className={styles['menu__item']} onClick={(e) => onScrollLinkClicked(e, 1)}>
                  {t.navbar.linkPhotos}
                </a>
              </Link>
            </div>

            {/* Contact */}
            <div>
              <Link href="#contact">
                <a className={`${styles['menu__item']}`} onClick={(e) => onScrollLinkClicked(e, 2)}>
                  {t.navbar.linkContact}
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
