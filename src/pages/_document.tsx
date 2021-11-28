import React from 'react'

import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="de" dir="ltr">
        {/* default head */}
        <Head>
          <link
            key="shortcut icon"
            rel="shortcut icon"
            href={`${
              process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : ''
            }/favicon.ico`}
          />
        </Head>

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
