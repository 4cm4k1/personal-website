import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerContent,
} from '@rmwc/drawer';

import { ThemeProvider } from '@rmwc/theme';

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
  TopAppBarActionItem,
} from '@rmwc/top-app-bar';

import useDarkMode from 'use-dark-mode';

import { useEffect, useState } from 'react';

import Nav from '../components/Nav';

const AppLayout: React.FunctionComponent = ({ children }) => {
  const { value, toggle } = useDarkMode(false);

  const lightTheme = {
    primary: '#d81b60',
    secondary: '#455a64',
    background: '#eceff1',
    surface: '#fafafa',
    error: '#e65100',
    onPrimary: '#ffffff',
    onSecondary: '#eceff1',
    onSurface: '#455a64',
    onError: '#ffffff',
    textPrimaryOnBackground: '',
    textSecondaryOnBackground: '',
    textHintOnBackground: '',
    textDisabledOnBackground: '',
    textIconOnBackground: '',
    textPrimaryOnLight: '',
    textSecondaryOnLight: '',
    textHintOnLight: '',
    textDisabledOnLight: '',
    textIconOnLight: '',
    textPrimaryOnDark: '',
    textSecondaryOnDark: '',
    textHintOnDark: '',
    textDisabledOnDark: '',
    textIconOnDark: '',
  };

  const darkTheme = {
    primary: '#000000',
    secondary: '#d81b60',
    background: '#212121',
    surface: '#484848',
    error: '#e65100',
    onPrimary: '#fafafa',
    onSecondary: '#ffffff',
    onSurface: '#fafafa',
    onError: '#ffffff',
    textPrimaryOnBackground: '',
    textSecondaryOnBackground: '',
    textHintOnBackground: '',
    textDisabledOnBackground: '',
    textIconOnBackground: '',
    textPrimaryOnLight: '',
    textSecondaryOnLight: '',
    textHintOnLight: '',
    textDisabledOnLight: '',
    textIconOnLight: '',
    textPrimaryOnDark: '',
    textSecondaryOnDark: '',
    textHintOnDark: '',
    textDisabledOnDark: '',
    textIconOnDark: '',
  };

  const theme = value ? darkTheme : lightTheme;

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <ThemeProvider options={theme}>
        <TopAppBar short>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarNavigationIcon
                icon='menu'
                onClick={() => setOpen(true)}
              />
              <TopAppBarTitle>Anthony Maki</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem icon='invert_colors' onClick={toggle} />
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <Drawer
          modal
          open={open}
          onClose={() => setOpen(false)}
          style={value ? { backgroundColor: '#212121' } : {}}
        >
          <DrawerHeader>
            <DrawerTitle style={value ? { color: '#fafafa' } : {}}>
              Anthony Maki
            </DrawerTitle>
            <DrawerSubtitle style={value ? { color: '#fafafa' } : {}}>
              Software Engineer
            </DrawerSubtitle>
          </DrawerHeader>
          <DrawerContent>
            <Nav darkMode={value} />
          </DrawerContent>
        </Drawer>
        <TopAppBarFixedAdjust />
        {children}
      </ThemeProvider>
      <style global jsx>{`
        body.light-mode {
          background-color: #ffffff;
          color: #1c313a;
          transition: background-color 0.5s ease;
        }
        body.dark-mode {
          background-color: #212121;
          color: #fafafa;
          transition: background-color 0.5s ease;
        }

        // @font-face {
        //   font-family: 'Material Icons';
        //   font-style: normal;
        //   font-weight: 400;
        //   font-display: swap;
        //   src: url('/mdif.woff2') format('woff2'), local('Material Icons'),
        //     local('Material-Icons'), local('MaterialIcons');
        // }
        @font-face {
          font-family: 'Material Icons Outlined';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/mdio.woff2') format('woff2'),
            local('Material Icons Outlined'), local('Material-Icons-Outlined'),
            local('MaterialIconsOutlined');
        }
        // @font-face {
        //   font-family: 'Material Icons Round';
        //   font-style: normal;
        //   font-weight: 400;
        //   font-display: swap;
        //   src: url('/mdir.woff2') format('woff2'), local('Material Icons Round'),
        //     local('Material-Icons-Round'), local('MaterialIconsRound');
        // }
        // @font-face {
        //   font-family: 'Material Icons Sharp';
        //   font-style: normal;
        //   font-weight: 400;
        //   font-display: swap;
        //   src: url('/mdis.woff2') format('woff2'), local('Material Icons Sharp'),
        //     local('Material-Icons-Sharp'), local('MaterialIconsSharp');
        // }
        // @font-face {
        //   font-family: 'Material Icons Two Tone';
        //   font-style: normal;
        //   font-weight: 400;
        //   font-display: swap;
        //   src: url('/mditt.woff2') format('woff2'),
        //     local('Material Icons Two Tone'), local('Material-Icons-Two-Tone'),
        //     local('MaterialIconsTwoTone');
        // }
        // .material-icons {
        //   font-family: 'Material Icons';
        //   font-weight: normal;
        //   font-style: normal;
        //   font-size: 24px;
        //   line-height: 1;
        //   letter-spacing: normal;
        //   text-transform: none;
        //   display: inline-block;
        //   white-space: nowrap;
        //   word-wrap: normal;
        //   direction: ltr;
        //   -webkit-font-feature-settings: 'liga';
        //   -webkit-font-smoothing: antialiased;
        // }
        .material-icons-outlined {
          font-family: 'Material Icons Outlined';
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
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
        }
        // .material-icons-round {
        //   font-family: 'Material Icons Round';
        //   font-weight: normal;
        //   font-style: normal;
        //   font-size: 24px;
        //   line-height: 1;
        //   letter-spacing: normal;
        //   text-transform: none;
        //   display: inline-block;
        //   white-space: nowrap;
        //   word-wrap: normal;
        //   direction: ltr;
        //   -webkit-font-feature-settings: 'liga';
        //   -webkit-font-smoothing: antialiased;
        // }
        // .material-icons-sharp {
        //   font-family: 'Material Icons Sharp';
        //   font-weight: normal;
        //   font-style: normal;
        //   font-size: 24px;
        //   line-height: 1;
        //   letter-spacing: normal;
        //   text-transform: none;
        //   display: inline-block;
        //   white-space: nowrap;
        //   word-wrap: normal;
        //   direction: ltr;
        //   -webkit-font-feature-settings: 'liga';
        //   -webkit-font-smoothing: antialiased;
        // }
        // .material-icons-two-tone {
        //   font-family: 'Material Icons Two Tone';
        //   font-weight: normal;
        //   font-style: normal;
        //   font-size: 24px;
        //   line-height: 1;
        //   letter-spacing: normal;
        //   text-transform: none;
        //   display: inline-block;
        //   white-space: nowrap;
        //   word-wrap: normal;
        //   direction: ltr;
        //   -webkit-font-feature-settings: 'liga';
        //   -webkit-font-smoothing: antialiased;
        // }
      `}</style>
    </>
  );
};

export default AppLayout;
