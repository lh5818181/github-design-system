import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

// Tipagem: o componente Input deve herdar as propriedades padrão de um input HTML
export type InputProps = {
  // Adiciona a possibilidade de um ícone opcional à esquerda
  icon?: React.ReactNode; 
  // Propriedade para controlar o estado de erro
  error?: boolean; 
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ icon, error, className, ...props }: InputProps) => {
  // Combina classes CSS para o estilo padrão e estados (error, customizado)
  const containerClasses = [
    styles.container,
    error ? styles.error : '',
    className,
  ].join(' ').trim();

  return (
    <div className={containerClasses}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <input 
        className={styles.input} 
        {...props} 
      />
    </div>
  );
};