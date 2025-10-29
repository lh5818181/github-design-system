import { ReactNode } from 'react';

import styles from './styles.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'invisible';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  href?: string;
}

export const Button = ({ children, variant = 'secondary' }: ButtonProps) => {
  const ClassNames = `${styles.wrapper} ${styles[variant]}`;

  return <button className={ClassNames}>{children}</button>;
};
