import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en-US'>
      <Head>
        <meta charSet='utf-8' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icon-ios-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icon-16x16.png'
        />
        <meta name='msapplication-TileColor' content='#111111' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <meta name='theme-color' content='#111111' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
