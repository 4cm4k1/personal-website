import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout';

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
          <title>Anthony Maki - Software Engineer</title>
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
        <style jsx global>{`
          @import 'modern-normalize/modern-normalize';
        `}</style>
      </Container>
    );
  }
}
