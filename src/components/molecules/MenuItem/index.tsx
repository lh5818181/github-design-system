import { Badge } from '../../atoms/Badge';
import { Image } from '../../atoms/Image';

import styles from './styles.module.scss';

export interface MenuItemProps {
  label: string;
  isBadge: boolean;
  count: number;
  icon: {
    src: string;
    alt: string;
  };
}

export const MenuItem = ({
  label,
  icon,
  count,
  isBadge = false,
}: MenuItemProps) => {
  return (
    <div className={styles.wrapper}>
      <Image {...icon} />

      <span>{label}</span>

      {isBadge && <Badge>{count}</Badge>}
    </div>
  );
};
