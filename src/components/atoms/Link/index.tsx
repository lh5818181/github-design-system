import React, { AnchorHTMLAttributes } from 'react';
import styles from './styles.module.scss';

// Definindo as variações de estilo do Link (baseado no uso do GitHub)
export type LinkVariant = 'default' | 'muted' | 'danger';

/**
 * Propriedades para o componente Link.
 */
export type LinkProps = {
  /** O caminho para onde o link aponta. */
  href: string;
  /** O conteúdo interno do link (texto ou elementos). */
  children: React.ReactNode;
  /** A variante visual do link (cor e ênfase). */
  variant?: LinkVariant;
  /** Se true, remove o sublinhado e a cor padrão, deixando apenas a cor do texto herdada. */
  unstyled?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>; // Herda props padrão do <a>

export const Link = ({
  variant = 'default',
  unstyled = false,
  children,
  className,
  ...props
}: LinkProps) => {
  // Combina as classes CSS
  const linkClasses = [styles.link, !unstyled ? styles[variant] : styles.unstyled, className]
    .join(' ')
    .trim();

  return (
    <a className={linkClasses} {...props}>
      {children}
    </a>
  );
};
