import React, { Component } from 'react';
import { List } from '@rmwc/list';

import Link from './Link';

const handleClick = () => {};

export default class NextLinkMaterialList extends Component {
  render() {
    const { onListItemClick } = this.props;

    return (
      <List>
        <Link href="/" prefetch passHref>
          Home
        </Link>
        <Link href="/bio" prefetch passHref>
          Bio
        </Link>
        <Link href="/resume" prefetch passHref>
          Resume
        </Link>
        <Link href="/projects" prefetch passHref>
          Projects
        </Link>
      </List>
    );
  }
}
