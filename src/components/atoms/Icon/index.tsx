import { SVGProps } from 'react';
import styles from './styles.module.scss';
import { LucideIcon } from 'lucide-react';

// Definindo os tamanhos do ícone, baseados nos padrões de UI
export type IconSize = 'small' | 'medium' | 'large' | 'xlarge';

// As props do componente devem aceitar o componente do ícone em si
export type IconProps = {
  /** O componente de ícone a ser renderizado (ex: <Search />) */
  icon: LucideIcon;
  /** Tamanho do ícone. Padrão é 'medium'. */
  size?: IconSize;
  /** Cor customizada (se não for passado, usa a cor padrão do CSS/contexto) */
  color?: string;
  /** Descrição para acessibilidade (aria-label). */
  ariaLabel: string;
} & SVGProps<SVGSVGElement>; // Herda props SVG como 'onClick'

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
