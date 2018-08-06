import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import theme from '../config';
import { description } from '../package.json';

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return {
      ...page,
      styleTags,
    };
  }

  render() {
    const { styleTags } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta name="description" content={description} />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, viewport-fit=cover"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content={theme.secondary} />
          <link
            rel="stylesheet"
            href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="//mcansh.github.io/yeezy-logo-font/assets/css/font.css"
          />
          <link rel="shortcut icon" href="/img/favicon/favicon.ico" />

          <link
            rel="shortcut icon"
            href="/img/favicon/favicon-32.png"
            sizes="32x32"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="228x228"
            href="/img/favicon/favicon-228.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="195x195"
            href="/img/favicon/favicon-195.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="/img/favicon/favicon-152.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/img/favicon/favicon-144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="128x128"
            href="/img/favicon/favicon-128.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="/img/favicon/favicon-120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="96x96"
            href="/img/favicon/favicon-96.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="/img/favicon/favicon-72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            href="/img/favicon/favicon-57.png"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@justinistech" />
          <meta name="twitter:title" content="Justin Joseph" />
          <meta name="twitter:description" content="Justin Joseph" />
          <meta
            name="twitter:image"
            content="https://justinthe.ninja/img/favicon/favicon.png"
          />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
