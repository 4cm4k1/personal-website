import Document, { Head, Main, NextScript } from 'next/document';
import constants from '../lib/constants';

import JsonLd from '../components/JsonLd';

const { analytics, assetPath, host, primaryTheme, profile } = constants;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang='en-US'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link rel='preconnect' href='https://stats.g.doubleclick.net' />
          <link rel='preconnect' href='https://www.google.com' />
          <link rel='preconnect' href='https://www.google-analytics.com' />
          <link rel='preconnect' href='https://www.googletagmanager.com' />
          <JsonLd host={host} profile={profile} />
          <meta content='origin-when-cross-origin' name='referrer' />
          <meta
            name='description'
            property='og:description'
            content={profile.description}
          />
          <link
            rel='apple-touch-icon'
            type='image/png'
            sizes='180x180'
            href={`${assetPath}/icon-180.png`}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href={`${assetPath}/icon-32.png`}
          />
          <link rel='manifest' href={`${assetPath}/manifest.json`} />
          <meta
            name='msapplication-config'
            content={`${assetPath}/browserconfig.xml`}
          />
          <meta name='apple-mobile-web-app-title' content={profile.fullName} />
          <meta name='application-name' content={profile.fullName} />
          <meta name='theme-color' content={primaryTheme} />
          <link rel='author' content={profile.fullName} />
          <link rel='canonical' href={host} />
          <link rel='opengraph' href={`${assetPath}/metadata.html`} />
          <meta
            property='og:image'
            content={`${host}${assetPath}/og-image.jpg`}
          />
          <meta property='og:image:alt' content={profile.title} />
          <meta
            property='og:image:url'
            content={`${host}${assetPath}/og-image.jpg`}
          />
          <meta property='og:title' content={profile.title} />
          <meta property='og:type' content='profile' />
          <meta property='og:url' content={host} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content={`@${profile.username}`} />
          <meta name='twitter:creator' content={`@${profile.username}`} />
          <meta name='twitter:title' content={profile.title} />
          <meta name='twitter:description' content={profile.description} />
          <meta
            name='twitter:image:alt'
            property='og:image:alt'
            content={profile.title}
          />
          <script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${analytics}`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analytics}');
          `,
            }}
          />
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
            crossOrigin='anonymous'
          />
        </body>
      </html>
    );
  }
}
