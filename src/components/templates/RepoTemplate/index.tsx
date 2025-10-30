import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { Link } from '../../atoms/Link';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export type PaginationProps = {
  /** A página atualmente ativa (1-based index). */
  currentPage: number;
  /** O número total de páginas. */
  totalPages: number;
  /** Callback chamado ao clicar em uma página. */
  onPageChange: (page: number) => void;
} & HTMLAttributes<HTMLDivElement>;

const MAX_PAGES_DISPLAYED = 7; // Quantidade máxima de links numéricos visíveis

// Gera a lista de números de página a serem exibidos, com elipses
const getPageNumbers = (currentPage: number, totalPages: number): (number | '...')[] => {
  if (totalPages <= MAX_PAGES_DISPLAYED) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | '...')[] = [];
  const startPage = 1;
  const endPage = totalPages;
  const delta = 2; // Quantas páginas mostrar ao redor da página atual

  pages.push(startPage);
  if (currentPage - delta > startPage + 1) {
    pages.push('...');
  }

  for (let i = currentPage - delta; i <= currentPage + delta; i++) {
    if (i > startPage && i < endPage) {
      pages.push(i);
    }
  }

  if (currentPage + delta < endPage - 1) {
    pages.push('...');
  }
  if (endPage !== startPage) {
    pages.push(endPage);
  }

  // Remove duplicatas
  return pages.filter((value, index, self) => self.indexOf(value) === index);
};


export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ...props
}: PaginationProps) => {

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const handlePrev = () => {
    if (!isPrevDisabled) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (!isNextDisabled) onPageChange(currentPage + 1);
  };

  return (
    <nav className={[styles.pagination, className].join(' ').trim()} aria-label="Pagination" {...props}>
      <Button 
        onClick={handlePrev}
        disabled={isPrevDisabled}
        variant="secondary"
        size="small"
        className={styles.pageButton}
      >
        <Icon icon={ChevronLeft} size="small" ariaLabel="Previous" />
        Previous
      </Button>

      <div className={styles.pageLinks}>
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`elipsis-${index}`} className={styles.ellipsis} aria-hidden="true">
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;
          
          return (
            <Link
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              href={`#page-${pageNum}`}
              className={isActive ? styles.activeLink : styles.pageLink}
              aria-current={isActive ? 'page' : undefined}
              variant="default" // Link simples
              unstyled // Remove o underline
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      <Button
        onClick={handleNext}
        disabled={isNextDisabled}
        variant="secondary"
        size="small"
        className={styles.pageButton}
      >
        Next
        <Icon icon={ChevronRight} size="small" ariaLabel="Next" />
      </Button>
    </nav>
  );
};