import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

// Definindo os tamanhos (comum para Spinners)
export type SpinnerSize = 'small' | 'medium' | 'large';

export type SpinnerProps = {
  /** Tamanho do Spinner. Padrão é 'medium'. */
  size?: SpinnerSize;
  /** Cor do Spinner. Padrão é o azul principal do GitHub. */
  color?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Spinner = ({ size = 'medium', color, className, ...props }: SpinnerProps) => {
  const spinnerClasses = [styles.spinner, styles[size], className].join(' ').trim();

  // O estilo 'color' é passado diretamente para permitir customização via prop
  const spinnerStyle = color ? { borderTopColor: color, borderLeftColor: color } : {};

  return (
    <div
      className={spinnerClasses}
      style={spinnerStyle}
      role="status" // Para acessibilidade
      aria-label="Carregando"
      {...props}
    />
  );
};
