import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

import TopAppBar, { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

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
        <TopAppBar
          className="app-bar"
          title="Anthony Maki"
          navigationIcon={
            <MaterialIcon icon="menu" onClick={() => console.log('click')} />
          }
          short
        />
        <TopAppBarFixedAdjust> </TopAppBarFixedAdjust>
        <Component {...pageProps} />
        <style jsx global>{`
          @import 'modern-normalize/modern-normalize';
          $mdc-typography-font-family: -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          $mdc-theme-primary: #424242;
          $mdc-theme-secondary: #d81b60;
          $mdc-theme-on-primary: #ffffff;
          $mdc-theme-on-secondary: #ffffff;
          @import '@material/react-top-app-bar/index';
          @import '@material/react-material-icon/index';
        `}</style>
      </Container>
    );
  }
}
