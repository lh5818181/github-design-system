import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

// Definindo as variações de tamanho para o texto de corpo
export type TextSize = 'small' | 'medium' | 'large';

// Definindo as variações de cor/peso (baseado no uso de texto no GitHub)
export type TextVariant = 'default' | 'muted' | 'bold';

export type TextProps = {
  /** Conteúdo do texto. */
  children: React.ReactNode;
  /** Variação de tamanho. Padrão é 'medium'. */
  size?: TextSize;
  /** Variação de cor/peso. Padrão é 'default'. */
  variant?: TextVariant;
  /** Se true, renderiza o componente como um <span> em vez de <p>. */
  asSpan?: boolean;
} & HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>; // Permite props de <p> ou <span>

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
