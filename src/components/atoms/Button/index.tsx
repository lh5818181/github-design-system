import { ReactNode } from 'react';

import styles from './styles.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'invisible';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
}

export const Button = ({ children, variant = 'secondary' }: ButtonProps) => {
  const classNames = `${styles.wrapper} ${styles[variant]}`;

  return <button className={classNames}>{children}</button>;
};
