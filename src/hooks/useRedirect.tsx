import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { LanguageDetector } from 'next-language-detector'

import i18nConfig from '../../next-i18next.config'

import languageDetector from '../utils/languageDetector'

const detector = languageDetector as LanguageDetector

export const useRedirect = (to?: string) => {
  const router = useRouter()
  const path = to || router.asPath

  const [locale, setLocale] = useState('de')

  // language detection
  useEffect(() => {
    let detectedLng = path === '/' ? 'de' : detector.detect()
    // path === '/' || !i18nConfig.i18n.locales.includes(router.asPath.slice(1))
    detectedLng = i18nConfig.i18n.locales.includes(router.asPath.slice(1))
      ? router.asPath.slice(1)
      : detectedLng

    console.log(router, detectedLng)

    if (detectedLng && detectedLng !== locale) {
      // locale = detectedLng
      setLocale(detectedLng)

      //
      // 404 pages
      //
      if (
        //
        detector.cache &&
        path.startsWith('/' + detectedLng) &&
        router.route.includes('/404')
      ) {
        detector.cache(detectedLng)
        router.replace('/' + detectedLng + '/404')
        // router.push('/' + detectedLng + '/404')
        return
      }

      //
      // /de page
      //
      if (
        //
        detector.cache &&
        !router.route.includes('/404') &&
        // detectedLng === 'de'
        // (router.asPath === '/de' || path === `/de`)
        router.asPath === '/de'
      ) {
        setLocale('de')

        detector.cache('de')
        router.replace('/')
        // router.push('/')
        return
      }

      //
      // pages
      //
      if (
        //
        detector.cache &&
        !router.route.includes('/404') &&
        path !== `/${detectedLng}` &&
        path !== `/`
      ) {
        detector.cache(detectedLng)

        if (path.startsWith(`/${detectedLng}/`)) {
          router.replace(path)
        } else {
          router.replace('/' + detectedLng + path)
          // router.push('/' + detectedLng + path)
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return locale
}

// export const Redirect = () => {
//   useRedirect()
//   return <></>
// }
