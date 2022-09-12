import React from 'react'

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface LinkComponentProps extends LinkProps {
  children: any
  className?: any
  skipLocaleHandling?: boolean
}

export const LinkComponent = ({
  children,
  skipLocaleHandling = false,
  ...rest
}: LinkComponentProps) => {
  const router = useRouter()

  const locale = rest.locale || router.query.locale || ''

  let href = rest.href || router.asPath

  if ((href as string).indexOf('http') === 0) skipLocaleHandling = true

  if (locale && !skipLocaleHandling) {
    href = href ? `/${locale}${href}` : router.pathname.replace('[locale]', locale as string)
  }

  return (
    <>
      <Link href={href}>
        <a {...(rest as any)}>{children}</a>
      </Link>
    </>
  )
}
