import App, { Container } from 'next/app';
import Head from 'next/head';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { profile } = publicRuntimeConfig;

import '../scss/_normalize.scss';

import AppLayout from '../components/AppLayout';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>{profile.title}</title>
        </Head>
        <AppLayout profile={profile}>
          <Component {...pageProps} />
        </AppLayout>
      </Container>
    );
  }
}
