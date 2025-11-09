import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

// Definições de tipos de props
export type TextProps = {
  /** O conteúdo textual. */
  children: React.ReactNode;
  /** Tamanho do texto. */
  size?: 'small' | 'medium' | 'large';
  /** Variantes de cor/estilo. */
  variant?: 'default' | 'muted' | 'bold' | 'danger';
  /** Renderiza como <span> em vez de <p> (útil para metadados inline). */
  asSpan?: boolean;
} & (HTMLAttributes<HTMLParagraphElement> | HTMLAttributes<HTMLSpanElement>);

/**
 * Componente Text para tipografia básica.
 * Renderiza como <p> por padrão, mas pode ser <span>.
 */
export const Text = ({
  children,
  size = 'medium',
  variant = 'default',
  asSpan = false,
  className = '',
  ...props
}: TextProps) => {
  // Decide se renderiza como <p> ou <span>
  const Component = asSpan ? 'span' : 'p';
  
  // Combina classes de estilo do módulo SCSS (styles[size] e styles[variant])
  const textClasses = [
    styles.text, 
    styles[size], 
    styles[variant], 
    className
  ].join(' ').trim();

  return (
    <Component
      className={textClasses}
      // O casting é necessário para props de HTML genéricas
      {...(props as HTMLAttributes<HTMLParagraphElement> | HTMLAttributes<HTMLSpanElement>)}
    >
      {children}
    </Component>
  );
};