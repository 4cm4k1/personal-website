import type { AppProps } from 'next/app';
import Head from 'next/head';
// import 'modern-normalize/modern-normalize.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
