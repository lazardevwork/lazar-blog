import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head />
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />

          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2300992621659894"
            crossorigin="anonymous"
          ></script>
          <ins
            class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-2300992621659894"
            data-ad-slot="3122840172"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </body>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2300992621659894"
          crossOrigin="anonymous"
        ></script>
      </Html>
    );
  }
}

export default MyDocument;
