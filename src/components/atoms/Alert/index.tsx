import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../../atoms/Icon'; // Usando o Átomo Icon
import { AlertCircle, CheckCircle, X, Info } from 'lucide-react'; // Ícones de exemplo

// Tipos de alerta e mapeamento de ícones
export type AlertVariant = 'success' | 'error' | 'warning' | 'info';

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertCircle,
  info: Info,
};

export type AlertProps = {
  /** Tipo de alerta (controla cor e ícone). Padrão é 'info'. */
  variant?: AlertVariant;
  /** Conteúdo da mensagem. */
  children: React.ReactNode;
  /** Se true, mostra um botão para fechar o alerta. */
  isDismissible?: boolean; 
  /** Função de callback ao fechar o alerta. */
  onDismiss?: () => void;
} & HTMLAttributes<HTMLDivElement>;

export const Alert = ({ 
  variant = 'info', 
  children, 
  isDismissible = false,
  onDismiss,
  className, 
  ...props 
}: AlertProps) => {
  
  const alertClasses = [
    styles.alert,
    styles[variant],
    className,
  ].join(' ').trim();
  
  const AlertIcon = iconMap[variant];

  return (
    <div className={alertClasses} role="alert" {...props}>
      <span className={styles.iconWrapper}>
        <Icon icon={AlertIcon} size="medium" ariaLabel={`${variant} status`} />
      </span>
      
      <div className={styles.content}>
        {children}
      </div>
      
      {isDismissible && onDismiss && (
        <button className={styles.dismissButton} onClick={onDismiss} aria-label="Fechar alerta">
          <Icon icon={X} size="small" ariaLabel="Fechar" />
        </button>
      )}
    </div>
  );
};