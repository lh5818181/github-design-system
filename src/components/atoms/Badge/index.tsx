import { ReactNode } from 'react';

import styles from './styles.module.scss';

export interface BadgeProps {
  children: ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <div className={styles.wrapper}>
      <span>{children}</span>
    </div>
  );
};