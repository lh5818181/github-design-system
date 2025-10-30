import React, { useState, useRef, useEffect, HTMLAttributes, useId } from 'react';
import styles from './styles.module.scss';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';    
import { ChevronDown, Check } from 'lucide-react';      

/**
 * Define a estrutura de um item no menu Dropdown.
 */
export type DropdownItem = {
  /** Valor único do item. */
  id: string;
  /** Texto exibido no menu. */
  label: string;
  /** Se true, o item está selecionado. */
  isSelected?: boolean;
  /** Callback ao clicar no item. */
  onClick: (id: string) => void;
};

/**
 * Propriedades para a Molécula Dropdown.
 */
export type DropdownProps = {
  /** Rótulo exibido no botão que abre o menu. */
  label: string;
  /** Lista de itens do menu. */
  items: DropdownItem[];
  /** Se o dropdown deve alinhar o menu à direita (útil para menus no canto da tela). */
  alignRight?: boolean;
} & HTMLAttributes<HTMLDivElement>; // Permite passar props nativas para o container

export const Dropdown = ({
  label,
  items,
  alignRight = false,
  className,
  ...props
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownId = useId(); // Gera um ID único para acessibilidade
  const menuId = `${dropdownId}-menu`;

  // Hook para fechar o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (id: string, onClick: (id: string) => void) => {
    onClick(id);
    setIsOpen(false); // Fecha após a seleção
  };

  const menuClasses = [
    styles.menu,
    alignRight ? styles.alignRight : styles.alignLeft,
    isOpen ? styles.open : styles.closed,
  ].join(' ').trim();

  return (
    <div className={[styles.dropdown, className].join(' ').trim()} ref={dropdownRef} {...props}>
      <Button 
        variant="secondary"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen} // [A11Y] Estado de expansão
        aria-haspopup="menu"  // [A11Y] Indica que é um menu
        aria-controls={menuId} // [A11Y] Vincula ao ID do menu
        id={`${dropdownId}-button`} // ID para ser referenciado
        className={styles.dropdownButton}
      >
        <span>{label}</span>
        <Icon icon={ChevronDown} size="small" ariaLabel="Expandir menu" />
      </Button>

      <div 
            className={menuClasses} 
            role="menu" // [A11Y] Define o container como um menu
            id={menuId} // ID referenciado pelo botão
            aria-labelledby={`${dropdownId}-button`} // [A11Y] Vincula ao botão
            // Adicionar tabindex="-1" se quiser focar o menu ao abrir (opcional, mas recomendado)
        >
        <ul className={styles.list}>
          {items.map((item) => (
            <li 
              key={item.id} 
              // Adicionar role="none" pois o role="menuitem" será no botão/link interno
              className={styles.listItem}
              // EVITAR onClick em <li> - Usar um botão ou link interno
            >
                {/* O elemento clicável (link ou botão) deve ter o role e tabindex */}
                <button
                    onClick={() => handleItemClick(item.id, item.onClick)}
                    className={styles.itemButton} // Novo estilo para o botão/link interno
                    role="menuitem" // [A11Y] Define como item do menu
                    tabIndex={0} // Permite focar com Tab
                    aria-selected={item.isSelected} // [A11Y] Indica estado de seleção
                >
                    <div className={styles.itemContent}>
                      <div className={styles.checkIcon}>
                        {item.isSelected && <Icon icon={Check} size="small" ariaLabel="Selecionado" />}
                      </div>
                      <span className={styles.itemLabel}>{item.label}</span>
                    </div>
                </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};