import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { GoogleAdsenseContainer } from '../components/GoogleAdsenseContainer';

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
          <GoogleAdsenseContainer />

          <Script
            id="Adsense-id"
            async
            crossOrigin="anonymous"
            onError={(e) => {
              console.error('Script failed to load', e);
            }}
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2300992621659894"
            strategy="afterInteractive"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
