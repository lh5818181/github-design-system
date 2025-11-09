import React, { useState, useCallback } from 'react';
import styles from './styles.module.scss';
import { Text } from '../../atoms/Text'; // Usando o Átomo Text para tipografia

export interface TabItem {
  id: string;
  label: string;
  /** Contador opcional (ex: Issues (12)). */
  count?: number; 
}

export interface TabsProps {
  /** Lista de abas a serem renderizadas. */
  tabs: TabItem[];
  /** O ID da aba inicialmente ativa. */
  initialTabId?: string;
  /** Função chamada quando uma aba é selecionada. */
  onTabChange?: (tabId: string) => void;
  /** Classe CSS customizada para o contêiner. */
  className?: string;
}

/**
 * Molécula Tabs para navegação principal (ex: Code, Issues, PRs).
 * Implementa o padrão de acessibilidade WAI-ARIA Tabs e usa o Átomo Text.
 */
export const Tabs = ({
  tabs,
  initialTabId,
  onTabChange,
  className = '',
}: TabsProps) => {
  const defaultTabId = initialTabId || tabs[0]?.id;
  const [activeTabId, setActiveTabId] = useState(defaultTabId);

  const handleTabClick = useCallback((tabId: string) => {
    setActiveTabId(tabId);
    onTabChange?.(tabId);
  }, [onTabChange]);

  const tabsClasses = [styles.tabsContainer, className].join(' ').trim();

  return (
    <div className={tabsClasses}>
      {/* Contêiner com role="tablist" para acessibilidade */}
      <div role="tablist" aria-label="Navegação do Repositório" className={styles.tabList}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          const tabButtonClasses = [
            styles.tabButton, 
            isActive ? styles.active : ''
          ].join(' ').trim();

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              // IDs necessários para a associação de aria-controls/aria-labelledby (fora deste componente)
              aria-controls={`panel-${tab.id}`} 
              id={`tab-${tab.id}`} 
              onClick={() => handleTabClick(tab.id)}
              className={tabButtonClasses}
              type="button" // Garante que não submeta formulários
            >
              {/* Usando Text atom para consistência na tipografia */}
              <Text asSpan size="medium" variant={isActive ? 'bold' : 'default'}>
                {tab.label}
              </Text>
              {/* Contagem Opcional */}
              {tab.count !== undefined && (
                <span className={styles.tabCount}>
                   <Text asSpan size="small" variant='muted'>
                    {tab.count}
                  </Text>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};