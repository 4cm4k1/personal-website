import Document, { Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';

import JsonLd from '../components/JsonLd';

const { publicRuntimeConfig } = getConfig();
const {
  analytics,
  assetPath,
  host,
  primaryTheme,
  profile,
} = publicRuntimeConfig;

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
          <JsonLd host={host} profile={profile} />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta content='origin-when-cross-origin' name='referrer' />
          <meta
            name='description'
            property='og:description'
            content={profile.description}
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href={`${assetPath}/apple-touch-icon.png`}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href={`${assetPath}/favicon-16x16.png`}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href={`${assetPath}/favicon-32x32.png`}
          />
          <link rel='manifest' href={`${assetPath}/manifest.json`} />
          <link
            rel='mask-icon'
            href={`${assetPath}/safari-pinned-tab.svg`}
            color={primaryTheme}
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
