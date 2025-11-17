import React, { ComponentPropsWithoutRef } from 'react';
import styles from './styles.module.scss';
import { LucideProps } from 'lucide-react'; 
import React from 'react';

// 1. Definimos um tipo base de props de SVG, excluindo 'ref', 'color' e 'size' para evitar conflitos.
type BaseSvgProps = Omit<ComponentPropsWithoutRef<'svg'>, 'color' | 'size'>;

// 2. Definimos as props customizadas
export type IconProps = {
  /** O componente de ícone real (ex: <AlertCircle> de lucide-react). */
  icon: React.ElementType<LucideProps>;
  /** Tamanho pré-definido. */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /** Cor do ícone, usa tokens de cor do GitHub. */
  color?: 'default' | 'muted' | 'success' | 'danger' | 'accent';
  /** Rótulo de acessibilidade. Deve ser fornecido se o ícone for interativo ou transmitir significado. */
  ariaLabel?: string;
} & BaseSvgProps; // Combinamos com as props base de SVG

/**
 * Átomo Icon para renderização de ícones SVG de forma padronizada.
 * Utiliza React.forwardRef para lidar corretamente com a tipagem do 'ref'.
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(({
  icon: IconComponent,
  size = 'medium',
  color = 'default',
  ariaLabel,
  className = '',
  ...props
}, ref) => {
  // Combina classes de estilo
  const iconClasses = [
    styles.icon,
    styles[size], 
    styles[color], 
    className
  ].join(' ').trim();

  // Acessibilidade
  const ariaProps = ariaLabel ? { 'aria-label': ariaLabel } : { 'aria-hidden': true };

  // O LucideProps já inclui a tipagem correta de ref, 
  // então o forwardRef do React trata disso ao passar 'ref' para o IconComponent
  return (
    <IconComponent 
      ref={ref} // Passamos o ref diretamente
      className={iconClasses}
      role={ariaLabel ? 'img' : undefined} 
      {...ariaProps}
      {...props as LucideProps} // Cast para LucideProps simplifica o problema de tipagem
    />
  );
});

Icon.displayName = 'Icon';