import { createRef, Component } from 'react';
import Drawer, {
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
  DrawerAppContent,
} from '@material/react-drawer';
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import dynamic from 'next/dynamic';

const NavList = dynamic(() => import('./NavList'));

import '@material/react-drawer/dist/drawer.css';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';

interface Props {
  children: React.ReactNode;
  profile: {
    email: string;
    lastName: string;
    firstName: string;
    jobTitle: string;
    phone: string;
    description: string;
    fullName: string;
    title: string;
  };
}

export default class AppLayout extends Component<Props> {
  state = { open: false };

  mainContentEl = createRef<HTMLDivElement>();

  onDrawerClose = () => {
    this.setState({ open: false });
    if (this.mainContentEl && this.mainContentEl.current) {
      this.mainContentEl.current.focus();
    }
  };

  onListItemClick = () => this.onDrawerClose();

  onMenuButtonClick = () => this.setState({ open: true });

  render() {
    const { children, profile } = this.props;
    return (
      <>
        <Drawer modal open={this.state.open} onClose={this.onDrawerClose}>
          <DrawerHeader>
            <DrawerTitle>{profile.fullName}</DrawerTitle>
            <DrawerSubtitle>{profile.jobTitle}</DrawerSubtitle>
          </DrawerHeader>
          <DrawerContent>
            <NavList />
          </DrawerContent>
        </Drawer>
        <div ref={this.mainContentEl}>
          <DrawerAppContent>
            <TopAppBar short>
              <TopAppBarRow>
                <TopAppBarSection align='start'>
                  <TopAppBarIcon navIcon tabIndex={0}>
                    <MaterialIcon
                      hasRipple
                      icon='menu'
                      onClick={this.onMenuButtonClick}
                    />
                  </TopAppBarIcon>
                  <TopAppBarTitle>{profile.title}</TopAppBarTitle>
                </TopAppBarSection>
              </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust>{children}</TopAppBarFixedAdjust>
          </DrawerAppContent>
        </div>
      </>
    );
  }
}
