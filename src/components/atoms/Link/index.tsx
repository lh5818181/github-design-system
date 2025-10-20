import React, { AnchorHTMLAttributes } from 'react';
import styles from './styles.module.scss';

// Definindo as variações de estilo do Link (baseado no uso do GitHub)
export type LinkVariant = 'default' | 'muted' | 'danger';

// O componente Link herda todas as propriedades de uma tag <a> HTML
export type LinkProps = {
  /** Variação de estilo do Link. Padrão é 'default' (azul). */
  variant?: LinkVariant;
  /** Se true, o link não terá nenhum estilo de link (parece texto normal, mas é clicável). */
  unstyled?: boolean; 
  /** Conteúdo do link. */
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ 
  variant = 'default', 
  unstyled = false, 
  children, 
  className, 
  ...props 
}: LinkProps) => {
  
  // Combina as classes CSS
  const linkClasses = [
    styles.link,
    !unstyled ? styles[variant] : styles.unstyled,
    className,
  ].join(' ').trim();

  return (
    <a 
      className={linkClasses}
      {...props}
    >
      {children}
    </a>
  );
};