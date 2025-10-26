import React, { ElementType, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

// Definindo o nível de hierarquia do título (H1 a H6)
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  /** Nível de hierarquia do título (tag HTML). Padrão é 'h2'. */
  level?: HeadingLevel;
  /** Conteúdo do título. */
  children: React.ReactNode;
  /** Se true, o título não terá a margem padrão inferior. */
  noMargin?: boolean;
} & HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({ 
  level: Component = 'h2', // Alias 'level' para 'Component' que será a tag HTML
  children, 
  noMargin = false,
  className, 
  ...props 
}: HeadingProps) => {

  // A classe CSS é gerada com base no nível (ex: styles.h1, styles.h2)
  const headingClasses = [
    styles[Component], // Classe específica para o tamanho (ex: h1, h2)
    noMargin ? styles.noMargin : '',
    className,
  ].join(' ').trim();

  return (
    <Component 
      className={headingClasses} 
      {...props}
    >
      {children}
    </Component>
  );
};