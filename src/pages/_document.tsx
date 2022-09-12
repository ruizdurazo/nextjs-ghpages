import React from 'react'

import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

import i18nextConfig from '../../next-i18next.config'

class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const currentLocale =
      (this.props.__NEXT_DATA__.query.locale as string) || i18nextConfig.i18n.defaultLocale

    return (
      <Html dir="ltr" lang={currentLocale}>
        {/* Default Head */}
        <Head></Head>

        {/* Body */}
        <body>
          <Main />
          <NextScript />

          {/* Add the modal wrapper */}
          {/* <div id="modal-root"></div> */}
        </body>
      </Html>
    )
  }
}

export default MainDocument
