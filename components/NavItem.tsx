import { useRouter } from 'next/router';
import { ListItem, ListItemGraphic, ListItemText } from '@rmwc/list';
import isUrl from 'is-url-superb';

type Props = {
  href: string;
  as?: string;
  options?: object;
  icon?: string;
  darkMode?: boolean;
};

const NavItem: React.FunctionComponent<Props> = ({
  children,
  href,
  as = href,
  options = {},
  icon,
  darkMode = false,
}) => {
  const router = useRouter();

  const handleClick = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (isUrl(href)) {
      window.location.href = href;
    } else {
      router.push(href, as, options);
    }
  };

  const style = darkMode
    ? { backgroundColor: '#000000', color: '#ffffff' }
    : undefined;

  return (
    <ListItem
      onClick={handleClick}
      activated={router.pathname === href}
      style={style}
    >
      {icon && <ListItemGraphic icon={icon} style={style} />}
      <ListItemText style={style}>{children}</ListItemText>
    </ListItem>
  );
};

export default NavItem;
