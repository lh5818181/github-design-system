import { Header } from '../../organisms/Header/';
import type { HeaderProps } from '../../organisms/Header';

import styles from './styles.module.scss';

export interface HomeTemplateProps {
  header: HeaderProps;
}

export const HomeTemplate = ({ header }: HomeTemplateProps) => {
  return (
    <div className={styles.wrapper}>
      <Header {...header} />

      <main className={styles.main}>Content</main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};