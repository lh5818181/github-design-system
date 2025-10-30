import React from 'react';
import styles from './styles.module.scss';
import { Link } from '../../atoms/Link';
import { Icon } from '../../atoms/Icon';
import { LucideIcon } from 'lucide-react';

/**
 * Define a estrutura de cada aba de navegação.
 */
export type TabItem = {
  /** ID único da aba (usado para navegação e controle de estado). */
  id: string;
  /** Rótulo exibido na aba. */
  label: string;
  /** O componente do ícone do Lucide (opcional). */
  icon?: LucideIcon; 
  /** O caminho de navegação (obrigatório para o Link). */
  href: string;
  /** Se true, a aba está ativa e visualmente selecionada. */
  isActive?: boolean;
  /** Contador de itens (ex: 5 Issues). */
  count?: number; 
};

/**
 * Propriedades para a Molécula Tabs.
 */
export type TabsProps = {
  /** Array de objetos que representam as abas. */
  items: TabItem[];
  /** Função de callback ao clicar em uma aba (opcional, para navegação SPA). */
  onTabClick?: (id: string) => void;
};

export const Tabs = ({ items, onTabClick }: TabsProps) => {
  return (
    <nav className={styles.container} role="tablist"> 
      {items.map((item) => {
          // Geração de IDs para vincular ao conteúdo (tabpanel)
          const tabId = `tab-${item.id}`;
          const panelId = `panel-${item.id}`;

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => {
                if (onTabClick) {
                  e.preventDefault(); 
                  onTabClick(item.id);
                }
              }}
              unstyled
              // [A11Y] Define o elemento como uma aba
              role="tab" 
              // [A11Y] Indica se a aba está selecionada
              aria-selected={!!item.isActive} 
              // [A11Y] Vincula a aba ao ID do conteúdo correspondente
              aria-controls={panelId} 
              // [A11Y] ID da própria aba
              id={tabId} 
              // [A11Y] Apenas a aba ativa deve ser navegável via TAB (idealmente)
              // No React, é mais fácil definir tabindex com base no isActive
              tabIndex={item.isActive ? 0 : -1} 
              className={[styles.tab, item.isActive ? styles.active : ''].join(' ').trim()}
            >
              {item.icon && (
                <span className={styles.iconWrapper}>
                  <Icon icon={item.icon} size="small" ariaLabel={`Navegar para ${item.label}`} />
                </span>
              )}

              <span className={styles.label}>{item.label}</span>

              {item.count !== undefined && item.count > 0 && (
                <span className={styles.count}>{item.count}</span>
              )}
            </Link>
          )}
          )}
        </nav>
  );
};