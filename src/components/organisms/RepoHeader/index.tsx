import React from 'react';
import styles from './styles.module.scss';
import { Heading } from '../../atoms/Heading';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import { Tabs, TabItem } from '../../molecules/Tabs';
import { Icon } from '../../atoms/Icon';
import { Code, Lock, LucideIcon } from 'lucide-react'; // Ícones

// Estrutura para os botões de ação (Star, Fork, Watch)
export type RepoActionButton = {
  label: string;
  icon: LucideIcon;
  count?: number;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export type RepoHeaderProps = {
  /** Nome do usuário/organização */
  owner: string;
  /** Nome do repositório */
  repoName: string;
  /** Se o repositório é privado */
  isPrivate: boolean;
  /** Breve descrição do repositório */
  description: string;
  /** Botões de ação (Star, Fork, Watch) */
  actions: RepoActionButton[];
  /** Itens para o componente Tabs */
  tabs: TabItem[];
};

export const RepoHeader = ({
  owner,
  repoName,
  isPrivate,
  description,
  actions,
  tabs,
}: RepoHeaderProps) => {
  const statusText = isPrivate ? 'Private' : 'Public';

  return (
    <div className={styles.container}>
      {/* Linha 1: Título e Status */}
      <div className={styles.titleSection}>
        <div className={styles.repoIdentity}>
          <Icon
            icon={isPrivate ? Lock : Code}
            size="large"
            ariaLabel={statusText}
            className={styles.icon}
          />

          <Heading level="h1" noMargin className={styles.repoTitle}>
            {/* Link para o Owner (usando um Link simples) */}
            <span className={styles.ownerName}>{owner}</span> /{' '}
            <span className={styles.repoName}>{repoName}</span>
          </Heading>

          {/* Badge de Status */}
          <Badge variant={isPrivate ? 'secondary' : 'default'} className={styles.statusBadge}>
            {statusText}
          </Badge>
        </div>

        {/* Botões de Ação (Star, Fork, etc.) */}
        <div className={styles.actionButtons}>
          {actions.map((action, index) => (
            <Button
              key={index}
              onClick={action.onClick}
              variant={action.variant || 'secondary'}
              className={styles.actionButton}
            >
              <Icon icon={action.icon} size="small" ariaLabel={action.label} />
              <span className={styles.actionLabel}>{action.label}</span>
              {action.count !== undefined && (
                <Badge variant="tertiary">{action.count}</Badge> // Exemplo de uso do Badge
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Linha 2: Descrição */}
      <p className={styles.description}>{description}</p>

      {/* Linha 3: Tabs de Navegação */}
      <div className={styles.tabsSection}>
        <Tabs items={tabs} />
      </div>
    </div>
  );
};
