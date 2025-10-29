import { ReactNode } from 'react';

import styles from './styles.module.scss';

export type BadgeProps = {
  children: ReactNode;
  variant?: 'default' | 'secondary';
  className?: string;
};

export const Badge = ({ children }: BadgeProps) => {
  return (
    <div className={styles.wrapper}>
      <span>{children}</span>
    </div>
  );
};
