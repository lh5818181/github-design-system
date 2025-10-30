import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Button } from '../../atoms/Button';             
import { IssueListItem, IssueListItemProps } from '../../molecules/IssueListItem'; 
import { Pagination } from '../../molecules/Pagination';
import { Dropdown, DropdownItem } from '../../molecules/Dropdown'; 
import { Link } from '../../atoms/Link';             
import { Text } from '../../atoms/Text';             

// Interface para os filtros do cabeçalho da lista
export type IssueFilter = {
  label: string;
  items: DropdownItem[];
};

export type IssueListProps = {
  /** Número total de issues abertas. */
  openCount: number;
  /** Número total de issues fechadas. */
  closedCount: number;
  /** Lista de issues a serem exibidas. */
  issues: IssueListItemProps[];
  /** Filtros para o cabeçalho da lista (Labels, Assignee, Sort, etc.). */
  filters: IssueFilter[];
  /** URL para criar uma nova Issue. */
  newIssueHref: string;


  /** A página atualmente ativa. */
  currentPage: number;
  /** O número total de páginas. */
  totalPages: number;
  /** Callback ao mudar de página. */
  onPageChange: (page: number) => void;

} & HTMLAttributes<HTMLDivElement>;

export const IssueList = ({
  openCount,
  closedCount,
  issues,
  filters,
  newIssueHref,
  currentPage,
  totalPages,
  onPageChange,
  ...props
}: IssueListProps) => {

  return (
    <div className={styles.container} {...props}>
      {/* 1. Cabeçalho da Lista (Header) */}
      <div className={styles.header}>
        <div className={styles.statusLinks}>
          {/* Link de Issues Abertas */}
          <Link href="#open-issues" variant="default" className={styles.statusLink}>
            <span className={styles.statusIconOpen} aria-label="Open Issues" />
            <Text asSpan size="medium" variant="default">
                {openCount} Open
            </Text>
          </Link>
          
          {/* Link de Issues Fechadas */}
          <Link href="#closed-issues" variant="muted" className={styles.statusLink}>
            <span className={styles.statusIconClosed} aria-label="Closed Issues" />
            <Text asSpan size="medium" variant="muted">
                {closedCount} Closed
            </Text>
          </Link>
        </div>
        
        <div className={styles.controls}>
            {/* Filtros Dropdown */}
            {filters.map((filter, index) => (
                <Dropdown 
                    key={index} 
                    label={filter.label} 
                    items={filter.items} 
                />
            ))}

            {/* Botão Nova Issue */}
            <Button href={newIssueHref} variant="primary">
                New issue
            </Button>
        </div>
      </div>

      {/* 2. Área de Filtros e Ações (Separador Visual) */}
      <div className={styles.filterBar}>
        {/* Aqui ficariam os inputs de busca/filtro em linha, se necessário */}
        {/* Por enquanto, apenas o espaço e borda visual */}
        
        <div className={styles.filterDropdowns}>
             {/* Filtros que aparecem na barra (Ex: Author, Label, Milestones) */}
             {/* Usamos os mesmos Dropdowns do cabeçalho para simplificar, mas com estilo diferente */}
             <Text asSpan size="small" variant="muted">25 issues</Text>
             {/* Mais filtros aqui */}
        </div>
      </div>
      
      {/* 3. Lista de Issues */}
      <ul className={styles.issueList}>
        {issues.map((issueProps) => (
          <IssueListItem key={issueProps.number} {...issueProps} />
        ))}
        {issues.length === 0 && (
            <div className={styles.noResults}>
                <Text size="large" variant="muted">Nenhuma issue encontrada.</Text>
            </div>
        )}
      </ul>
      
      {/* 4. Rodapé e Paginação (Atualizado) */}
      {issues.length > 0 && totalPages > 1 && (
          <div className={styles.footer}>
              {/* O Organismo IssueList agora usa o componente Pagination */}
              <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange} children={undefined}              />
          </div>
      )}
      {/* Se houver issues, mas apenas 1 página, exibe a contagem de resultados */}
      {issues.length > 0 && totalPages <= 1 && (
         <div className={styles.footer}>
             <Text size="small" variant="muted">Mostrando {issues.length} de {openCount + closedCount} resultados.</Text>
         </div>
      )}

    </div>
  );
};