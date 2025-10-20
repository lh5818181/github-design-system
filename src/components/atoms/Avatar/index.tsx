import React, { ImgHTMLAttributes } from 'react';
import styles from './styles.module.scss';

// Define os tamanhos que o Avatar pode ter, baseados no uso comum do GitHub
export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

// O componente Avatar herda as propriedades de uma imagem HTML, mas com tipos definidos
export type AvatarProps = {
  /** URL da imagem do usuário. */
  src: string;
  /** Nome do usuário para o texto alternativo (alt). */
  alt: string;
  /** Tamanho do Avatar. Padrão é 'medium'. */
  size?: AvatarSize;
  /** Se true, adiciona um anel para destacar (como em Avatars ativos). */
  highlight?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Avatar = ({ 
  src, 
  alt, 
  size = 'medium', 
  highlight = false, 
  className, 
  ...props 
}: AvatarProps) => {

  // Combina classes de estilo para o tamanho e highlight
  const avatarClasses = [
    styles.avatar,
    styles[size],
    highlight ? styles.highlight : '',
    className,
  ].join(' ').trim();

  // O fallback pode ser uma imagem padrão ou um ícone/letra. 
  // Por simplicidade, vamos usar o próprio componente Image (se já tiver criado) ou uma tag img.

  return (
    <img
      className={avatarClasses}
      src={src}
      alt={alt}
      // Se a imagem falhar ao carregar, pode-se usar um evento onError para definir uma imagem padrão
      onError={(e) => {
        // Altera a fonte da imagem para um fallback genérico do GitHub
        e.currentTarget.src = 'https://avatars.githubusercontent.com/u/0?s=64&v=4';
        e.currentTarget.onerror = null; // Previne loop infinito se o fallback também falhar
      }}
      {...props}
    />
  );
};