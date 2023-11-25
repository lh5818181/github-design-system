import { Badge } from '../../atoms/Badge';

import { Icon, IconProps } from '../Icon';

import styles from './styles.module.scss';

export interface MenuItemProps {
  label: string;
  isBadge: boolean;
  count: number;
  icon: IconProps;
}

export const MenuItem = ({
  label,
  icon,
  count,
  isBadge = false,
}: MenuItemProps) => {
  return (
    <div className={styles.wrapper}>
      <Icon {...icon} />

      <span>{label}</span>

      {isBadge && <Badge>{count}</Badge>}
    </div>
  );
};
