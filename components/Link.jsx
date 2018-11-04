import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';
import { ListItem } from '@rmwc/list';

const ActiveLink = ({ router, children, ...props }) => {
  let activated = false;
  if (props.href === router.pathname) {
    activated = true;
  }
  return (
    <Link {...props}>
      <ListItem tag="a" activated={activated}>
        {children}
      </ListItem>
    </Link>
  );
};

export default withRouter(ActiveLink);
