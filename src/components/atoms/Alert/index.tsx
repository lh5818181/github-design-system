import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
// Importa o Átomo Icon para renderização padronizada
import { Icon } from '../../atoms/Icon'; 
// Ícones necessários de lucide-react
import { AlertCircle, CheckCircle, X, Info } from 'lucide-react'; 
import { LucideProps } from 'lucide-react'; 

// Tipos de alerta e mapeamento de ícones
export type AlertVariant = 'success' | 'error' | 'warning' | 'info';

const iconMap: Record<AlertVariant, React.ElementType<LucideProps>> = {
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

/**
 * Átomo Alert para fornecer feedback contextual ao usuário.
 * Usa cores e ícones consistentes baseados na variante.
 */
export const Alert = ({
  variant = 'info',
  children,
  isDismissible = false,
  onDismiss,
  className,
  ...props
}: AlertProps) => {
  const alertClasses = [styles.alert, styles[variant], className].join(' ').trim();

  const AlertIcon = iconMap[variant];
  
  // Mapeia a variante para a cor do token do ícone
  const iconColorMap: Record<AlertVariant, 'success' | 'danger' | 'accent' | 'default'> = {
    success: 'success',
    error: 'danger', // GitHub usa 'danger' para erro
    warning: 'accent', // GitHub usa 'attention' ou 'accent' para warning
    info: 'default', // Ou uma cor neutra, ou 'accent'
  };

  return (
    <div className={alertClasses} role="alert" {...props}>
      <span className={styles.iconWrapper}>
        {/* Passa a cor do token para o componente Icon */}
        <Icon icon={AlertIcon} size="medium" color={iconColorMap[variant]} ariaLabel={`Alerta de ${variant}`} />
      </span>
      <div className={styles.contentWrapper}>
        {children}
      </div>
      {isDismissible && (
        <button 
          className={styles.dismissButton} 
          onClick={onDismiss} 
          aria-label="Fechar alerta"
          type="button" // Garante que não submeta formulários
        >
          {/* O ícone de fechar é sempre sutil/default */}
          <Icon icon={X} size="small" color="muted" />
        </button>
      )}
    </div>
  );
};