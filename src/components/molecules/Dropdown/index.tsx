import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';    
import { ChevronDown, Check } from 'lucide-react';      // Ícones

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

export type DropdownProps = {
  /** Rótulo exibido no botão. */
  label: string;
  /** Lista de itens do menu. */
  items: DropdownItem[];
  /** Se o dropdown deve alinhar o menu à direita. */
  alignRight?: boolean;
};

export const Dropdown = ({
  label,
  items,
  alignRight = false,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <div className={styles.dropdown} ref={dropdownRef}>
      <Button 
        variant="secondary"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={styles.dropdownButton}
      >
        <span>{label}</span>
        <Icon icon={ChevronDown} size="small" ariaLabel="Expandir menu" />
      </Button>

      <div className={menuClasses}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li 
              key={item.id} 
              className={styles.listItem}
              onClick={() => handleItemClick(item.id, item.onClick)}
            >
              <div className={styles.itemContent}>
                {/* Ícone de check se estiver selecionado */}
                <div className={styles.checkIcon}>
                    {item.isSelected && <Icon icon={Check} size="small" ariaLabel="Selecionado" />}
                </div>
                <span className={styles.itemLabel}>{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};