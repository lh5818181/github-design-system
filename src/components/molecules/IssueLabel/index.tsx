import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Text } from '../../atoms/Text'; // Usando o Átomo Text para o conteúdo

export type IssueLabelProps = {
  /** O texto do rótulo (ex: "bug", "documentation"). */
  label: string;
  /** A cor do rótulo em formato hexadecimal (ex: "#f9d0c4"). */
  color: string;
  /** Se true, o rótulo é renderizado sem borda, com fundo mais claro. */
  isOutline?: boolean;
} & HTMLAttributes<HTMLSpanElement>; // Herda props de um span

// Função para calcular a cor do texto com base no fundo (para garantir contraste)
const getTextColor = (bgColor: string): string => {
  // Converte HEX para RGB
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return [r, g, b];
  };

  const [r, g, b] = hexToRgb(bgColor);
  
  // Cálculo de luminância para verificar se é claro ou escuro (WCAG 2.0)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Retorna preto se o fundo for claro, ou branco se o fundo for escuro
  return luminance > 0.5 ? '#24292f' : '#ffffff'; 
};

export const IssueLabel = ({
  label,
  color,
  isOutline = false,
  className,
  ...props
}: IssueLabelProps) => {

  const bgColor = `#${color.replace('#', '')}`;
  
  // Calcula a cor do texto e da borda
  const textColor = getTextColor(bgColor);
  const borderColor = isOutline ? bgColor : 'transparent';
  
  // Estilo do rótulo
  const labelStyle: React.CSSProperties = isOutline 
    ? {
        color: textColor,
        backgroundColor: 'transparent',
        borderColor: borderColor,
      }
    : {
        color: textColor,
        backgroundColor: bgColor,
        borderColor: bgColor,
      };

  return (
    <span 
      className={[styles.label, isOutline ? styles.outline : styles.filled, className].join(' ').trim()}
      style={labelStyle}
      {...props}
    >
      <Text asSpan size="small" className={styles.labelText}>
        {label}
      </Text>
    </span>
  );
};