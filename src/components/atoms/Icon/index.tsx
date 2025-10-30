import styles from './styles.module.scss';
import { LucideIcon, LucideProps } from 'lucide-react';

// Definindo os tamanhos do ícone, baseados nos padrões de UI
export type IconSize = 'small' | 'medium' | 'large' | 'xlarge';

/**
 * Propriedades para o componente Icon.
 */
export type IconProps = {
  /** O ícone do Lucide a ser renderizado. */
  icon: LucideIcon;
  /** O tamanho visual do ícone. */
  size: IconSize;
  /** Rótulo obrigatório de acessibilidade para leitores de tela. */
  ariaLabel: string;
} & LucideProps; // Usar LucideProps é melhor que HTMLAttributes<SVGSVGElement>

// Mapeamento dos tamanhos para pixels (valor comum para ícones)
const sizeMap: Record<IconSize, number> = {
  small: 16, // Usado em badges e menus menores
  medium: 20, // Padrão
  large: 24, // Para botões e títulos
  xlarge: 32, // Para cabeçalhos grandes
};

export const Icon = ({
  icon: IconComponent,
  size = 'medium',
  color,
  ariaLabel,
  className,
  ...props
}: IconProps) => {
  const iconSize = sizeMap[size] || sizeMap.medium;

  return (
    <span
      className={[styles.container, className].join(' ').trim()}
      role="img"
      aria-label={ariaLabel}
    >
      <IconComponent
        size={iconSize}
        color={color || 'currentColor'} // Se não for passado, usa a cor do texto pai
        className={styles.icon}
        {...props}
      />
    </span>
  );
};
