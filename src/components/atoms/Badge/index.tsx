import { HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

export enum BadgeVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

/**
 * Propriedades para o componente Badge.
 */
export type BadgeProps = {
  /** O texto ou elemento a ser exibido dentro do badge. */
  children: React.ReactNode;
  /** A variante visual do badge (controla a cor). */
  variant?: BadgeVariant;
  /** Se true, o badge terá um estilo mais sutil, sem cor de fundo (outline). */
  isMinimal?: boolean;
  /** Rótulo de acessibilidade opcional para o badge. */
  ariaLabel?: string;
} & HTMLAttributes<HTMLDivElement>; // Mantém HTMLAttributes do wrapper

export const Badge = ({ children }: BadgeProps) => {
  return (
    <div className={styles.wrapper}>
      <span>{children}</span>
    </div>
  );
};
