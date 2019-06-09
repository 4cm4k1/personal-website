import App, { Container } from 'next/app';
import Head from 'next/head';
import constants from '../lib/constants';

const { profile } = constants;

import '../scss/_normalize.scss';

import AppLayout from '../components/AppLayout';

export default class MyApp extends App {
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
