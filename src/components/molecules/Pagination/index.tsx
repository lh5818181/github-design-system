import React, { useCallback, useMemo } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../../atoms/Icon';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from '../../atoms/Link'; // Usando o Átomo Link

export interface PaginationProps {
  /** A página atualmente ativa (1-baseada). */
  currentPage: number;
  /** O número total de páginas disponíveis. */
  totalPages: number;
  /** Função de callback para alterar a página. Recebe o número da nova página. */
  onPageChange: (page: number) => void;
  /** Número máximo de links numéricos visíveis ao redor da página atual (exclui os links de início/fim). */
  siblingCount?: number;
}

// Lógica de cálculo dos números de página visíveis (padrão de paginação inteligente)
const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const DOTS = '...';

const usePagination = ({ totalPages, siblingCount = 1, currentPage }: Omit<PaginationProps, 'onPageChange'>) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5; // Total de links visíveis (incluindo 1, DOTS, currentPage, DOTS, totalPages)

    // Caso 1: Se o número total de páginas for menor que o que pode ser exibido
    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2; // Mostrar pontinhos se o vizinho esquerdo não for 1 ou 2
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1; // Mostrar pontinhos se o vizinho direito não for totalPages ou totalPages - 1

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // Caso 2: Apenas pontinhos à direita
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount; // 1, 2, ..., (vizinhos)
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPages];
    }

    // Caso 3: Apenas pontinhos à esquerda
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    // Caso 4: Pontinhos em ambos os lados
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return range(1, totalPages); // Fallback
  }, [totalPages, siblingCount, currentPage]);

  return paginationRange;
};

/**
 * Molécula Pagination para navegação entre páginas.
 * Implementa o layout e acessibilidade do padrão GitHub.
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  const paginationRange = usePagination({ totalPages, siblingCount, currentPage });

  const goToPrevious = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  const goToNext = useCallback(() => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, totalPages, onPageChange]);

  if (totalPages <= 1) return null;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav className={styles.pagination} aria-label="Navegação de Página">
      {/* Botão Anterior */}
      <button 
        className={styles.pageButton}
        onClick={goToPrevious} 
        disabled={isFirstPage}
        aria-label="Página Anterior"
        type="button"
      >
        <Icon icon={ChevronLeft} size="medium" color={isFirstPage ? 'muted' : 'default'} />
        Anterior
      </button>

      {/* Links Numéricos */}
      <div className={styles.pageLinks}>
        {paginationRange.map((page, index) => {
          if (page === DOTS) {
            return (
              <span key={index} className={styles.dots}>
                {DOTS}
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;

          return (
            // Usamos o Átomo Link, mas simulamos um botão para o estado ativo
            <Link
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(pageNumber);
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`${styles.pageLink} ${isActive ? styles.activeLink : ''}`}
            >
              {pageNumber}
            </Link>
          );
        })}
      </div>

      {/* Botão Próximo */}
      <button 
        className={styles.pageButton}
        onClick={goToNext} 
        disabled={isLastPage}
        aria-label="Próxima Página"
        type="button"
      >
        Próxima
        <Icon icon={ChevronRight} size="medium" color={isLastPage ? 'muted' : 'default'} />
      </button>
    </nav>
  );
};