import { GetStaticPaths, GetStaticProps } from 'next'

import i18nextConfig from '../../next-i18next.config'

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng,
    },
  }))

// escape german routes ??
//   i18nextConfig.i18n.locales.map((lng) => {
//     if (lng !== 'de') {
//       return {
//         params: {
//           locale: lng,
//         },
//       }
//     }
//   })

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getI18nPaths(),
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  }
}
