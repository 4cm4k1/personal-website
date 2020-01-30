import { AppProps } from 'next/app';

import 'modern-normalize/modern-normalize.css';
import '@material/theme/dist/mdc.theme.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/drawer/dist/mdc.drawer.css';
import '@material/list/dist/mdc.list.css';
import '@rmwc/avatar/avatar.css';
import '@rmwc/icon/icon.css';

import { RMWCProvider } from '@rmwc/provider';

import AppLayout from '../components/AppLayout';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
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

export default App;
