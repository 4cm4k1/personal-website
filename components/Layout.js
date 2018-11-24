import React, { Component } from 'react';
import Drawer, {
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
  DrawerAppContent,
} from '@material/react-drawer';
import TopAppBar, { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import NextLinkMaterialList from './NextLinkMaterialList';

export default class Layout extends Component {
  state = { open: false };

  mainContentEl = React.createRef();

  onDrawerClose = () => {
    this.setState({ open: false });
    this.mainContentEl.current.querySelector('i, a').focus();
  };

  onListItemClick = () => this.onDrawerClose();

  onMenuButtonClick = () => this.setState({ open: true });

  render() {
    return (
      <>
        <Drawer modal open={this.state.open} onClose={this.onDrawerClose}>
          <DrawerHeader>
            <DrawerTitle>Anthony Maki</DrawerTitle>
            <DrawerSubtitle>Software Engineer</DrawerSubtitle>
          </DrawerHeader>
          <DrawerContent>
            <NextLinkMaterialList onListItemClick={this.onListItemClick} />
          </DrawerContent>
        </Drawer>
        <div ref={this.mainContentEl}>
          <DrawerAppContent>
            <TopAppBar
              title='Anthony Maki'
              navigationIcon={
                <MaterialIcon icon='menu' onClick={this.onMenuButtonClick} />
              }
              short
            />
            <TopAppBarFixedAdjust>{this.props.children}</TopAppBarFixedAdjust>
          </DrawerAppContent>
        </div>

        {/* <style jsx global>{`
          // $mdc-typography-font-family: -apple-system, BlinkMacSystemFont,
          //   'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
          //   'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          // $mdc-theme-primary: #424242;
          // $mdc-theme-secondary: #d81b60;
          // $mdc-theme-on-primary: #ffffff;
          // $mdc-theme-on-secondary: #ffffff;
          // @import '@material/react-top-app-bar/index';
          // @import '@material/react-material-icon/index';
          // @import '@material/react-drawer/index';
          // @import '@material/react-list/index';
          // @import '@material/list/mdc-list';
          // @import '@material/react-layout-grid/index';
        `}</style> */}
      </>
    );
  }
}
