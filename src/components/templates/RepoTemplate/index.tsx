import React from 'react';
import styles from './styles.module.scss';
import { RepoHeader, RepoHeaderProps } from '../../organisms/RepoHeader'; // Organismo de Cabeçalho do Repo
import { Header } from '../../organisms/Header'; // Header Global
import { BreadcrumbProps } from '../../atoms/Breadcrumb';
import { Code, AlertTriangle, GitPullRequest } from 'lucide-react';

export type RepoTemplateProps = {
  /** Propriedades para o Organismo RepoHeader (com o Tabs). */
  repoHeaderData: RepoHeaderProps;
  /** Conteúdo principal da página (ex: IssueList, Code Viewer, README). */
  children: React.ReactNode;
};

const breadcrumbValue: BreadcrumbProps = {
  previousPage: {
    text: 'Previous page',
    target: '#',
  },
  currentPage: {
    text: 'Current page',
    target: '#',
  },
};

type RepoHeaderAction = {
  label: string;
  icon: React.ComponentType<any>;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  count?: number;
};

type MockRepoHeader = Omit<RepoHeaderProps, 'actions'> & {
  actions: RepoHeaderAction[];
  starsCount: number;
  forksCount: number;
};

const mockRepoHeader: MockRepoHeader = {
  owner: 'd3vlopes',
  actions: [
    // Adicione actions aqui...
  ],
  repoName: 'github-design-system',
  isPrivate: false,
  description: 'Um Design System construído com React e Storybook.',
  starsCount: 154,
  forksCount: 32,
  tabs: [
    { id: 'code', label: 'Code', icon: Code, href: '#code' },
    { id: 'issues', label: 'Issues', icon: AlertTriangle, href: '#issues', isActive: true, count: 20 },
    { id: 'pulls', label: 'Pull requests', icon: GitPullRequest, href: '#pulls', count: 12 },
  ],
};

export const RepoTemplate = ({
  repoHeaderData,
  children,
}: RepoTemplateProps) => {

  return (
    <div className={styles.pageWrapper}>
      {/* 1. Header Global */}
      {/* Assumindo que o Header já existe e contém a SearchBar */}
      <Header logoUrl={''} avatarUrl={''} menu={[]} breadcrumb={breadcrumbValue} /> 

      <div className={styles.repoContainer}>
        {/* 2. Organismo: Cabeçalho do Repositório (Inclui as Tabs) */}
        <RepoHeader {...repoHeaderData} />
      </div>

      <main className={styles.mainContent}>
        {/* 3. Conteúdo Principal */}
        <div className={styles.contentArea}>
          {children}
        </div>
      </main>
      
      {/* Opcional: Adicionar um Footer aqui (próxima pendência) */}
    </div>
  );
};