import { Component } from 'react';
import Drawer, {
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
  DrawerAppContent,
} from '@material/react-drawer';
import TopAppBar, { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import dynamic from 'next/dynamic';

const NavList = dynamic(() => import('./NavList'));

import '../scss/AppLayout.scss';

export default class AppLayout extends Component {
  state = { open: false };

  mainContentEl = React.createRef();

  onDrawerClose = () => {
    this.setState({ open: false });
    this.mainContentEl.current.querySelector('i, a').focus();
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
            <NavList onListItemClick={this.onListItemClick} />
          </DrawerContent>
        </Drawer>
        <div ref={this.mainContentEl}>
          <DrawerAppContent>
            <TopAppBar
              title={profile.title}
              navigationIcon={
                <MaterialIcon icon='menu' onClick={this.onMenuButtonClick} />
              }
              short
            />
            <TopAppBarFixedAdjust>{children}</TopAppBarFixedAdjust>
          </DrawerAppContent>
        </div>
      </>
    );
  }
}
