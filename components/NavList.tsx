import { List, ListItemGraphic } from '@rmwc/list';

import Link from './Link';

export default () => (
  <List>
    <Link href='/' passHref>
      <ListItemGraphic icon='home' />
      Home
    </Link>
    <Link href='/bio' passHref>
      <ListItemGraphic icon='face' />
      Bio
    </Link>
    <Link href='/resume' passHref>
      <ListItemGraphic icon='book' />
      Resume
    </Link>
    <Link href='/projects' passHref>
      <ListItemGraphic icon='apps' />
      Projects
    </Link>
    <Link href='/colophon' passHref>
      <ListItemGraphic icon='web' />
      Colophon
    </Link>
  </List>
);
