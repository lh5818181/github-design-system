import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../../atoms/Icon'; // Usando o Átomo Icon
import { Text } from '../../atoms/Text'; // Usando o Átomo Text
import { Search } from 'lucide-react';

export type SearchBarProps = {
  /** Placeholder do campo de busca. */
  placeholder?: string;
  /** Se true, a barra fica com o estilo expandido (focus state). */
  isExpanded?: boolean;
} & InputHTMLAttributes<HTMLInputElement>; // Herda props de input (onChange, value, etc.)

export const SearchBar = ({
  placeholder = 'Search or jump to...',
  isExpanded = false,
  className,
  ...props
}: SearchBarProps) => {

  const searchBarClasses = [
    styles.searchBar,
    isExpanded ? styles.expanded : styles.collapsed,
    className,
  ].join(' ').trim();

  return (
    <div className={searchBarClasses}>
      <Icon icon={Search} size="small" ariaLabel="Search" className={styles.searchIcon} />
      
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        aria-label="Search or jump to"
        {...props}
      />
      
      {/* Atalho de Teclado (o "/") */}
      <span className={styles.shortcut}>
        <Text asSpan size="small">
          /
        </Text>
      </span>
    </div>
  );
};