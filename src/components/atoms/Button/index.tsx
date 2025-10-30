import React, { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Icon, IconProps } from '../Icon'; // Assumindo que você tem um Icon Átomo

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'invisible';
type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Propriedades básicas do nosso componente Button, compatíveis com os atributos HTML de um <button>.
 */
export interface BaseButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  /** * Conteúdo interno do botão (texto, ícones, etc.). 
   */
  children: ReactNode;
  /** * A variante visual do botão, definindo sua cor e estilo. 
   * Ex: 'primary' (azul do GitHub), 'secondary' (cinza claro), 'danger' (vermelho).
   */
  variant?: ButtonVariant;
  /** * O tamanho visual do botão. 
   */
  size?: ButtonSize;
  /** * Se true, o botão ocupará 100% da largura do seu container. 
   */
  isFullWidth?: boolean;
  /** * Controla o estado de desabilitado. O nome 'disabled' é preferível para compatibilidade HTML.
   */
  isDisabled?: boolean;
  /** * Se true, exibe um spinner (loader) e desabilita o botão.
   */
  isLoading?: boolean;
  /** * Renderiza um ícone no lado esquerdo do texto.
   */
  iconLeft?: IconProps['icon'];
  /** * Se especificado, o botão é renderizado como um link <a> em vez de um <button>.
   */
  href?: string;
  /** * Função chamada ao clicar no botão.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

// União de tipos: Se tiver 'href', o botão se torna um âncora <a>.
export type ButtonProps = BaseButtonProps & (
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
);

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
  children,
  variant = 'secondary',
  size = 'medium',
  isFullWidth = false,
  isDisabled = false,
  isLoading = false,
  iconLeft,
  href,
  className,
  ...rest
}, ref) => {
  
  const disabled = isDisabled || isLoading;
  
  const classNames = [
    styles.wrapper,
    styles[variant],
    styles[size],
    isFullWidth && styles.fullWidth,
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {isLoading ? (
        // Substitua por seu Átomo Spinner
        <span className={styles.spinner} role="status" aria-label="Carregando"></span>
      ) : (
        iconLeft && <Icon icon={iconLeft} size="small" ariaLabel="" className={styles.icon} />
      )}
      <span className={styles.text}>{children}</span>
    </>
  );

  if (href) {
    // Renderiza âncora <a> se href for fornecido
    return (
      <a 
        href={href} 
        className={classNames} 
        aria-disabled={disabled} // Usa aria-disabled para links
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...rest as AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  // Renderiza botão <button> por padrão
  return (
    <button 
      className={classNames} 
      disabled={disabled} // Usa o atributo 'disabled' real para botões
      ref={ref as React.Ref<HTMLButtonElement>}
      {...rest as ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';