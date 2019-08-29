import Document, { Head, Html, Main, NextScript } from 'next/document';
import constants from '../lib/constants';

import JsonLd from '../components/JsonLd';

const { assetPath, host, primaryTheme, profile } = constants;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            rel='preload'
            href={`${assetPath}/material-icons.woff2`}
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <JsonLd host={host} profile={profile} />
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
          <meta name='author' content={profile.fullName} />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
