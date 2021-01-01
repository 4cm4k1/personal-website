// libraries
import { randomBytes } from 'crypto';
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

// strict CSP with `nonce` and `strict-dynamic`
// https://kotamat.com/post/nextjs-strict-csp/
type WithNonceProp = {
  nonce: string;
};

export default class extends Document<WithNonceProp> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const nonce = randomBytes(128).toString('base64');
    return { ...initialProps, nonce };
  }

  render() {
    const { nonce } = this.props;
    const csp =
      `object-src 'none'; ` +
      `base-uri 'none'; ` +
      // `Report-To`: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#Reporting_directives
      `report-uri https://anthony.app/api/csp-violation; report-to default; ` +
      // script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic_2
      `script-src 'unsafe-inline' https: 'nonce-${nonce}' 'strict-dynamic'; ` +
      // `script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http: 'nonce-${nonce}' 'strict-dynamic' ` +
      `upgrade-insecure-requests`;

    return (
      <Html lang='en-US'>
        <Head nonce={nonce}>
          <meta charSet='utf-8' />
          <meta httpEquiv='Content-Security-Policy' content={csp} />
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
          <meta name='msapplication-TileColor' content='#d81b60' />
          <meta name='msapplication-config' content='/browserconfig.xml' />
          <meta name='theme-color' content='#424242' />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}
