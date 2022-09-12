import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import texts from 'textos'

//
const useTextsGenerator = (locale: string) => {
  //
  // Router
  //

  const router = useRouter()

  const [t, setT] = useState({
    images: texts.images,
    ...texts.deutsch,
  } as TranslationWithImages)

  //
  useEffect(() => {
    if (locale === 'en') {
      setT({ ...t, ...texts.english })
      // else if (locale === 'es') {
      //   t = { ...t, ...texts.espanol }
    } else {
      setT({ ...t, ...texts.deutsch })
    }

    // console.log('locale', locale)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, router])

  return t
}

export default useTextsGenerator
