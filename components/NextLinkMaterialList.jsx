import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import MaterialIcon from '@material/react-material-icon';
import List, { ListItemGraphic, ListItemText } from '@material/react-list';

const handleClick = () => {};

class NavItem {
  constructor(name, icon, href) {
    this.name = name;
    this.icon = icon;
    this.href = href;
  }
}

const NavList = [
  new NavItem('Home', 'home', '/'),
  new NavItem('Bio', 'face', '/bio'),
  new NavItem('Résumé', 'book', '/resume'),
  new NavItem('Projects', 'apps', '/projects'),
];

export default class NextLinkMaterialList extends Component {
  state = {
    selectedIndex: 0,
  };

  componentDidMount() {
    this.setState({
      selectedIndex: NavList.findIndex(item => item.href === Router.pathname),
    });
  }

  render() {
    const { onListItemClick } = this.props;
    const { selectedIndex } = this.state;

    return (
      <List selectedIndex={selectedIndex} wrapFocus tag="nav">
        {NavList.map(({ href, name, icon }, index) => (
          <Link key={index} href={href} prefetch>
            <a className="mdc-list-item">
              <ListItemGraphic graphic={<MaterialIcon icon={icon} />} />
              <ListItemText primaryText={name} />
            </a>
          </Link>
        ))}
      </List>
    );
  }
}
