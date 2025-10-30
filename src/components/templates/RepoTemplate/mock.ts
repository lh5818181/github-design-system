
import { PaginationProps } from '.';

export const mockData: PaginationProps = {
  currentPage: 1,
  totalPages: 15,
  onPageChange: (page) => console.log(`Navigating to page ${page}`)
};