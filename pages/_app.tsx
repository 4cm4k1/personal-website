// libraries
if (process.env.NODE_ENV !== 'production') {
  // @ts-ignore
  import('preact/debug');
}
import { RMWCProvider } from '@rmwc/provider';
import { register, unregister } from 'next-offline/runtime';
import { useEffect } from 'preact/hooks';
// types
import { AppProps } from 'next/app';
import { FunctionalComponent } from 'preact';
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

const App: FunctionalComponent<AppProps> = ({ Component, pageProps }) => {
  // manually register/unregister service worker with `next-offline`
  if (process.env.NODE_ENV === 'production')
    useEffect(() => {
      register();
      return unregister();
    });

  return (
    <RMWCProvider
      icon={{
        basename: 'material-icons-outlined',
      }}
    >
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </RMWCProvider>
  );
};

export default App;
