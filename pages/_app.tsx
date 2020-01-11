import App from 'next/app';
import Head from 'next/head';
import constants from '../lib/constants';

const { profile } = constants;

import 'modern-normalize/modern-normalize.css';
import '@material/react-layout-grid/dist/layout-grid.css';
import '@material/list/dist/mdc.list.css';
import '@material/react-drawer/dist/drawer.css';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';

import AppLayout from '../components/AppLayout';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>{profile.title}</title>
        </Head>
        <AppLayout profile={profile}>
          <Component {...pageProps} />
        </AppLayout>
        <style global jsx>
          {`
            :root {
              --mdc-theme-primary: #424242;
              --mdc-theme-secondary: #d81b60;
              --mdc-theme-background: #fff;
              --mdc-theme-surface: #fff;
              --mdc-theme-error: #b00020;
              --mdc-theme-on-primary: #fff;
              --mdc-theme-on-secondary: #fff;
              --mdc-theme-on-surface: #424242;
              --mdc-theme-on-error: #fff;
              --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);
              --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);
              --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);
              --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
              --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
              --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
              --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);
              --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
              --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
              --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);
              --mdc-theme-text-primary-on-dark: white;
              --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.7);
              --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);
              --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.5);
              --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5);
            }
            @font-face {
              font-display: swap;
              font-family: 'Material Icons';
              font-style: normal;
              font-weight: 400;
              src: url('/static/material-icons.woff2') format('woff2'),
                local('Material Icons'), local('Material-Icons'),
                local('MaterialIcons');
            }

            .material-icons {
              font-family: 'Material Icons';
              font-weight: normal;
              font-style: normal;
              font-size: 24px;
              line-height: 1;
              letter-spacing: normal;
              text-transform: none;
              display: inline-block;
              white-space: nowrap;
              word-wrap: normal;
              direction: ltr;
              font-feature-settings: 'liga';
              -webkit-font-feature-settings: 'liga';
              -webkit-font-smoothing: antialiased;
            }
          `}
        </style>
      </>
    );
  }
}
