import React, { useState, useRef, useEffect, HTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';

import { ChevronDown } from 'lucide-react'; 
import { Icon } from '../../atoms/Icon'; // Usando o Átomo Icon

// --- Componentes Internos ---

/** Componente para itens individuais do menu */
export const DropdownItem: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button 
      className={styles.dropdownItem} 
      role="menuitem"
      type="button" // Garante que não submeta formulários
      {...props}
    >
      {children}
    </button>
  );
};

export type DropdownProps = {
  /** O elemento que aciona o Dropdown (geralmente um Button ou Icon). */
  trigger: ReactNode;
  /** O conteúdo interno do menu (geralmente uma lista de DropdownItem). */
  children: ReactNode;
  /** Alinhamento horizontal do menu em relação ao botão de acionamento. */
  align?: 'left' | 'right';
  /** Estado de abertura controlado externamente (opcional). */
  isOpen?: boolean;
  /** Callback chamado ao fechar ou abrir o menu. */
  onToggle?: (isOpen: boolean) => void;
  /** Rótulo de acessibilidade para o botão de acionamento. */
  ariaLabel: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Molécula Dropdown para exibir menus de contexto ou listas de ações.
 * Implementa lógica de 'click-outside' e acessibilidade.
 */
export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = 'left',
  isOpen: externalIsOpen,
  onToggle,
  ariaLabel,
  className = '',
  ...props
}) => {
  // Estado interno para controle, a menos que seja controlado externamente
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const dropdownRef = useRef<HTMLDivElement>(null);

  // --- Lógica de Fechamento ao Clicar Fora ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && isOpen) {
        // Se for controlado externamente, chama onToggle. Senão, atualiza o estado interno.
        externalIsOpen === undefined ? setInternalIsOpen(false) : onToggle?.(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, externalIsOpen, onToggle]);

  // --- Função de Toggle ---
  const handleToggle = () => {
    const newState = !isOpen;
    externalIsOpen === undefined ? setInternalIsOpen(newState) : onToggle?.(newState);
  };

  const menuClasses = [
    styles.dropdownMenu,
    styles[align],
    isOpen ? styles.open : styles.closed
  ].join(' ').trim();
  
  const containerClasses = [styles.dropdownContainer, className].join(' ').trim();

  return (
    <div className={containerClasses} ref={dropdownRef} {...props}>
      <button
        className={styles.dropdownTrigger}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls="dropdown-menu-panel"
        aria-label={ariaLabel}
        type="button"
      >
        {trigger}
        <Icon icon={ChevronDown} size="small" ariaLabel="Expandir menu" />
      </button>

      {isOpen && (
        <div 
          id="dropdown-menu-panel" 
          role="menu" 
          className={menuClasses}
        >
          {children}
        </div>
      )}
    </div>
  );
};