import React, { useState, useRef, useEffect, HTMLAttributes, useCallback } from 'react';
import styles from './styles.module.scss'; 

// -------------------------------------------------------------------
// 1. DROP-DOWN ITEM
// -------------------------------------------------------------------

export interface DropdownItemProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** Função de callback chamada no clique do usuário. */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ 
  children, 
  onClick, 
  className = '', 
  ...props 
}) => {
  const itemClasses = [styles.dropdownItem, className].join(' ').trim();
  
  return (
    <button
      className={itemClasses}
      role="menuitem"
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
// Adicionar o displayName ajuda o React.Children.map a identificar o componente.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(DropdownItem as any).displayName = 'DropdownItem';

// -------------------------------------------------------------------
// 2. DROP-DOWN PRINCIPAL
// -------------------------------------------------------------------

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  /** O elemento que aciona o Dropdown (e.g., um botão ou span). */
  trigger: React.ReactElement;
  /** Conteúdo do menu Dropdown (deve ser DropdownItem). */
  children: React.ReactNode;
  /** Rótulo de acessibilidade para o botão de trigger. */
  ariaLabel: string;
  /** CORREÇÃO: Mantenha 'position' como nome da prop, pois é o que o componente utiliza */
  position?: 'left' | 'right';
}
export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  ariaLabel,
  position = 'left',
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Função para fechar o menu
  const handleClose = useCallback(() => setIsOpen(false), []);
  
  // Lógica de Click Outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClose]);

  const handleTriggerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };
  
  // Clona e injeta a função de fechamento no DropdownItem (a correção principal!)
  const renderChildren = React.Children.map(children, child => {
    if (
      React.isValidElement(child) && 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((child.type as any).displayName === 'DropdownItem' || child.type === DropdownItem)
    ) {
      // Cria uma nova função onClick que executa a original e depois fecha o menu
      const originalOnClick = child.props.onClick as (e: React.MouseEvent<HTMLButtonElement>) => void;
      
      const combinedOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (originalOnClick) {
          originalOnClick(e);
        }
        // ESSA LINHA FECHA O MENU APÓS O CLIQUE NO ITEM
        handleClose();
      };

      return React.cloneElement(child, {
        onClick: combinedOnClick,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any);
    }
    return child;
  });


  const containerClasses = [styles.dropdownContainer, className].join(' ').trim();
  const menuClasses = [
    styles.dropdownMenu,
    styles[position],
    isOpen ? styles.open : '',
  ].join(' ').trim();

  return (
    <div className={containerClasses} ref={dropdownRef} {...props}>
      <button
        className={styles.dropdownTrigger}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        aria-controls="dropdown-menu-panel"
        type="button"
        onClick={handleTriggerClick}
      >
        {trigger}
      </button>

      {/* Renderiza o menu se estiver aberto (agora usando o renderChildren corrigido) */}
      {isOpen && (
        <div 
          className={menuClasses} 
          id="dropdown-menu-panel" 
          role="menu"
        >
          {renderChildren}
        </div>
      )}
    </div>
  );
};