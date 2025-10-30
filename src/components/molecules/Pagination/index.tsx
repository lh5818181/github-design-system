import styles from './styles.module.scss';
import React from 'react';

// Tipagem básica
export type PaginationProps = {
  // Defina as props aqui
  children: React.ReactNode;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ children }: PaginationProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};