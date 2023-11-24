import styles from './styles.module.scss';

interface LinkPage {
  text: string;
  target: string;
}

export interface BreadcrumbProps {
  previousPage: LinkPage;
  currentPage: LinkPage;
}

export const Breadcrumb = ({ previousPage, currentPage }: BreadcrumbProps) => {
  return (
    <nav className={styles.wrapper}>
      <a href={previousPage.target}>{previousPage.text}</a> <span>/</span>
      <a href={currentPage.target} className={styles.currentPage}>
        {currentPage.text}
      </a>
    </nav>
  );
};
