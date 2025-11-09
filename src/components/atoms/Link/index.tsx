import React, { AnchorHTMLAttributes } from 'react';
import styles from './styles.module.scss';

// Propriedades do componente Link
export type LinkProps = {
  /** O URL de destino do link. */
  href: string;
  /** O conteúdo do link (geralmente texto). */
  children: React.ReactNode;
  /** Variante de cor do link. */
  variant?: 'default' | 'subtle' | 'danger';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Átomo Link para navegação com estilo consistente.
 * Garante o tratamento de estados de foco, hover e cores baseados em tokens.
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({
  href,
  children,
  variant = 'default',
  className = '',
  ...props
}, ref) => {
  const linkClasses = [
    styles.link, 
    styles[variant], 
    className
  ].join(' ').trim();

  return (
    <a
      href={href}
      ref={ref}
      className={linkClasses}
      {...props}
    >
      {children}
    </a>
  );
});

Link.displayName = 'Link';