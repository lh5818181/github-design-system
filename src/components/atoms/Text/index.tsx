import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

// Definindo as variações de tamanho para o texto de corpo
export type TextSize = 'small' | 'medium' | 'large';

// Definindo as variações de cor/peso (baseado no uso de texto no GitHub)
export type TextVariant = 'default' | 'muted' | 'bold';

/**
 * Propriedades para o componente Text.
 */
export type TextProps = {
  /** O conteúdo de texto ou elementos internos. */
  children: React.ReactNode;
  /** O tamanho da fonte. */
  size?: TextSize;
  /** A variante de estilo (cor e peso da fonte). */
  variant?: TextVariant;
  /** Se true, renderiza como <span>. Caso contrário, renderiza como <p>. */
  asSpan?: boolean;
  /** Se true, garante que o texto não será quebrado. */
  noWrap?: boolean;
} & (
  | HTMLAttributes<HTMLParagraphElement>
  | HTMLAttributes<HTMLSpanElement>
);

export const Text = ({
  children,
  size = 'medium',
  variant = 'default',
  asSpan = false,
  className,
  ...props
}: TextProps) => {
  // A tag a ser usada (padrão é <p>)
  const Component = asSpan ? 'span' : 'p';

  // Combina as classes CSS
  const textClasses = [styles.text, styles[size], styles[variant], className].join(' ').trim();

  return (
    <Component
      className={textClasses}
      {...(props as HTMLAttributes<HTMLParagraphElement> | HTMLAttributes<HTMLSpanElement>)}
    >
      {children}
    </Component>
  );
};
