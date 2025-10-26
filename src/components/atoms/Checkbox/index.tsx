import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Text } from '../../atoms/Text'; // Usando o Átomo Text para o label

// Definindo o tipo de estilo: Checkbox tradicional ou Toggle (Switch)
export type CheckboxStyle = 'checkbox' | 'toggle';

export type CheckboxProps = {
  /** O rótulo/etiqueta do checkbox. */
  label: string;
  /** Estilo do componente. Padrão é 'checkbox'. */
  styleType?: CheckboxStyle;
  /** Se true, o checkbox/toggle não será funcional. */
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>; // Herda props de input (checked, onChange, etc.)

export const Checkbox = ({ 
  label,
  styleType = 'checkbox',
  disabled = false,
  id, 
  className,
  ...props 
}: CheckboxProps) => {

  // Se o ID não for fornecido, cria um ID único para associar label e input
  const generatedId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;

  const containerClasses = [
    styles.container,
    styles[styleType], // Aplica estilo: checkbox ou toggle
    disabled ? styles.disabled : '',
    className,
  ].join(' ').trim();

  return (
    <div className={containerClasses}>
      <input
        id={generatedId}
        type="checkbox"
        className={styles.input}
        disabled={disabled}
        {...props}
      />
      
      {/* O elemento visual que customizamos */}
      <span className={styles.checkMark} aria-hidden="true" /> 
      
      {/* O Label, usando o Átomo Text */}
      <label htmlFor={generatedId} className={styles.label}>
        <Text asSpan size="medium">
          {label}
        </Text>
      </label>
    </div>
  );
};