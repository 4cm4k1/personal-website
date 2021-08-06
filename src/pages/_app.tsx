// libraries
import { RMWCProvider } from '@rmwc/provider';
import { useEffect } from 'preact/hooks';
import Head from 'next/head';
// types
import { AppProps } from 'next/app';
// styles
import 'modern-normalize/modern-normalize.css';
import '@material/theme/dist/mdc.theme.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/drawer/dist/mdc.drawer.css';
import '@material/list/dist/mdc.list.css';
import '@rmwc/avatar/avatar.css';
import '@rmwc/icon/icon.css';
// local
import AppLayout from '../components/AppLayout';
// import { register } from '../lib/sw';

const App = ({ Component, pageProps }: AppProps) => {
  // manually register service worker with `next-offline`
  // TODO: fix service worker issues, switch packages
  // if (process.env.NODE_ENV === 'production') {
  //   useEffect(() => register(), []);
  // }

  return (
    <RMWCProvider
      icon={{
        basename: 'material-icons-outlined',
      }}
    >
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </RMWCProvider>
  );
};

export default App;
