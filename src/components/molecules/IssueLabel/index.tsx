import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Text } from '../../atoms/Text';

// Função utilitária para calcular a luminância e escolher a cor do texto
// Usa o algoritmo W3C, mas simplificado para o caso de uso.
// Retorna true se a cor for escura o suficiente para usar texto claro.
const isDarkColor = (hexColor: string) => {
  if (!hexColor || hexColor.length !== 7) return false;
  
  // Remove o '#'
  const hex = hexColor.substring(1); 
  // Converte RGB para luminância
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Cálculo de luminância (padrão)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Limiar de luminância: 0.5 é um bom ponto de corte.
  return luminance <= 0.5;
};


export type IssueLabelProps = {
  /** O nome do Label (ex: bug, feature, docs). */
  name: string;
  /** A cor do Label em formato hexadecimal (ex: '#0075ca'). */
  color: string;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * Molécula IssueLabel (Tag) para exibir rótulos de Issues e Pull Requests.
 * Calcula a cor do texto para garantir contraste adequado com a cor de fundo.
 */
export const IssueLabel: React.FC<IssueLabelProps> = ({
  name,
  color,
  className = '',
  ...props
}) => {
  // 1. Define o estilo de fundo
  const labelStyle: React.CSSProperties = {
    backgroundColor: color,
  };

  // 2. Calcula a cor do texto
  const textColor = isDarkColor(color) 
    ? 'var(--color-fg-on-emphasis)' // Branco (ou cor clara definida por token)
    : 'var(--color-fg-default)'; // Preto (ou cor escura definida por token)

  // 3. Adiciona a cor do texto ao estilo, garantindo que o Átomo Text seja renderizado com essa cor
  labelStyle.color = textColor;

  const labelClasses = [styles.issueLabel, className].join(' ').trim();

  return (
    <span 
      className={labelClasses} 
      style={labelStyle} 
      role="status" // Indica que é um status ou rótulo
      {...props}
    >
      <Text asSpan size="small" style={{ color: textColor }}>
        {name}
      </Text>
    </span>
  );
};