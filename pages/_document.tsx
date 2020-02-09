import crypto from 'crypto';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const cspHashOf = (text: any) => {
  const hash = crypto.createHash('sha256');
  hash.update(text);
  return `'sha256-${hash.digest('base64')}'`;
};

export default class extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const csp = `upgrade-insecure-requests; object-src 'none'; script-src ${cspHashOf(
      NextScript.getInlineScriptSource(this.props),
    )} 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https:; base-uri 'none'; report-uri /report-csp-violation`;

    return (
      <Html lang='en-US'>
        <Head>
          <meta httpEquiv='Content-Security-Policy' content={csp} />
          <link rel='apple-touch-icon' sizes='180x180' href='/icon-180.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/icon-32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/icon-16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <meta name='msapplication-TileColor' content='#d81b60' />
          <meta name='msapplication-config' content='/browserconfig.xml' />
          <meta name='theme-color' content='#424242' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
