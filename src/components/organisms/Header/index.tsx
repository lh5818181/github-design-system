import { Image } from '../../atoms/Image';
import { Breadcrumb, BreadcrumbProps } from '../../atoms/Breadcrumb';
import { Divider } from '../../atoms/Divider';

import { ButtonIcon, IconType } from '../../molecules/ButtonIcon';
import { Search } from '../../molecules/Search';
import { MenuItem, MenuItemProps } from '../../molecules/MenuItem';

import styles from './styles.module.scss';

export interface HeaderProps {
  logoUrl: string;
  avatarUrl: string;
  breadcrumb: BreadcrumbProps;
  menu: MenuItemProps[];
}

export const Header = ({ logoUrl, avatarUrl, breadcrumb, menu }: HeaderProps) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.globalBar}>
        <div className={styles.startColumn}>
          <ButtonIcon icon={IconType.HAMBURGER} />

          <Image src={logoUrl} alt="Github" />

          <Breadcrumb {...breadcrumb} />
        </div>

        <div className={styles.endColumn}>
          <Search />

          <Divider />

          <ButtonIcon isMany />
          <ButtonIcon icon={IconType.INBOX} />
          <ButtonIcon icon={IconType.COPILOT} />

          <Image src={avatarUrl} alt="Avatar do usuário" />
        </div>
      </div>

      <nav className={styles.menu}>
        {menu.map((menuItem) => {
          return <MenuItem {...menuItem} />;
        })}
      </nav>
    </header>
  );
};
