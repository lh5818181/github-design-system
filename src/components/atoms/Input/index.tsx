import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

// Propriedades do componente Input
export type InputProps = {
  /** Rótulo de acessibilidade. DEVE ser usado se não houver um <label> externo. */
  ariaLabel?: string;
  /** Variante visual para estados de erro. */
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * Átomo Input (campo de texto) com estilização padrão GitHub.
 * Usa tokens de design para bordas, foco e estados de erro.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  error = false,
  ariaLabel,
  className = '',
  ...props
}, ref) => {
  
  const inputClasses = [
    styles.input,
    error ? styles.error : '',
    className
  ].join(' ').trim();

  // Garante a acessibilidade, mesmo sem um label externo
  const accessibilityProps = ariaLabel ? { 'aria-label': ariaLabel } : {};

  return (
    <input
      ref={ref}
      className={inputClasses}
      type="text" // Padrão
      {...accessibilityProps}
      {...props}
    />
  );
});

Input.displayName = 'Input';