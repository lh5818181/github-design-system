import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { IssueListItem, IssueListItemProps } from '../IssueListItem'; 
import { Pagination } from '../../molecules/Pagination'; 
import { Text } from '../../atoms/Text'; 

// O tipo de props do IssueListItem é necessário para tipar os 'items'
export type { IssueListItemProps } from '../IssueListItem';

// CORREÇÃO: Usar 'type' em vez de 'interface' para a combinação de tipos
export type IssueListProps = {
  /** Lista de dados para renderizar os itens. */
  items: IssueListItemProps[];
  /** O número total de páginas (para o componente Pagination). */
  totalPages: number;
  /** Função de callback para lidar com a mudança de página. */
  onPageChange: (page: number) => void;
  /** A página atualmente ativa. */
  currentPage: number;
} & HTMLAttributes<HTMLDivElement>; // A combinação com HTMLAttributes é feita corretamente

/**
 * Organismo IssueList: o contêiner principal para Issues/PRs.
 * Integra IssueListItem e a Molécula Pagination.
 */
export const IssueList: React.FC<IssueListProps> = ({
  items,
  totalPages,
  onPageChange,
  currentPage,
  className = '',
  ...props
}) => {
  const listClasses = [styles.issueList, className].join(' ').trim();

  return (
    <div className={listClasses} {...props}>
      {/* 1. Cabeçalho */}
      <div className={styles.header}>
        <Text asSpan size="medium" variant="bold">
          {items.length} itens exibidos
        </Text>
      </div>

      {/* 2. Corpo da Lista */}
      <div className={styles.body}>
        {items.map((item, index) => (
          <IssueListItem key={item.number || index} {...item} />
        ))}
      </div>
      
      {/* 3. Rodapé/Paginação */}
      <div className={styles.footer}>
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};