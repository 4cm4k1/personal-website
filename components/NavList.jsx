import { List, ListItemGraphic } from '@rmwc/list';

import Link from './Link';

import '../scss/NavList.scss';

export default () => (
  <List>
    <Link href='/' passHref>
      <ListItemGraphic icon='home' />
      Home
    </Link>
    <Link href='/bio' prefetch passHref>
      <ListItemGraphic icon='face' />
      Bio
    </Link>
    <Link href='/resume' prefetch passHref>
      <ListItemGraphic icon='book' />
      Resume
    </Link>
    <Link href='/projects' prefetch passHref>
      <ListItemGraphic icon='apps' />
      Projects
    </Link>
  </List>
);
