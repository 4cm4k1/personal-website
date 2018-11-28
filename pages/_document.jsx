import Document, { Head, Main, NextScript } from 'next/document';

import JsonLd from '../components/JsonLd';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang='en-US'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link rel='preconnect' href='https://stats.g.doubleclick.net' />
          <link rel='preconnect' href='https://www.google.com' />
          <link rel='preconnect' href='https://www.google-analytics.com' />
          <link rel='preconnect' href='https://www.googletagmanager.com' />
          <JsonLd />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta content='origin-when-cross-origin' name='referrer' />
          <meta
            name='description'
            property='og:description'
            content='Anthony Maki is a Minneapolis-based software engineer. He codes stuff. Learn more about his interests, projects, and expertise. Contact him to chat, collaborate, and connect.'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-16x16.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-32x32.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#424242' />
          <meta name='apple-mobile-web-app-title' content='Anthony Maki' />
          <meta name='application-name' content='Anthony Maki' />
          <meta name='theme-color' content='#424242' />
          <link rel='author' content='Anthony Maki' />
          <link rel='canonical' href='https://anthony.codes' />
          <link rel='opengraph' href='/metadata.html' />
          <meta
            property='og:image'
            content='https://anthony.codes/og-image.jpg'
          />
          <meta
            property='og:image:alt'
            content='Anthony Maki - Software Engineer'
          />
          <meta
            property='og:image:url'
            content='https://anthony.codes/og-image.jpg'
          />
          <meta
            property='og:title'
            content='Anthony Maki - Software Engineer'
          />
          <meta property='og:type' content='profile' />
          <meta property='og:url' content='https://anthony.codes' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@4cm4k1' />
          <meta name='twitter:creator' content='@4cm4k1' />
          <meta
            name='twitter:title'
            content='Anthony Maki - Software Engineer'
          />
          <meta
            name='twitter:description'
            content='Anthony Maki is a Minneapolis-based software engineer. He codes stuff. Learn more about his interests, projects, and expertise. Contact him to chat, collaborate, and connect.'
          />
          <meta
            name='twitter:image:alt'
            property='og:image:alt'
            content='Anthony Maki - Software Engineer'
          />
          <script
            defer
            src='https://www.googletagmanager.com/gtag/js?id=UA-112988450-1'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
            crossOrigin='anonymous'
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-112988450-1');
          `,
            }}
          />
        </body>
      </html>
    );
  }
}
