import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../../atoms/Icon';
import { Link } from '../../atoms/Link';
import { Text } from '../../atoms/Text';
import { IssueLabel } from '../../molecules/IssueLabel'; 
import { GitPullRequest, AlertCircle } from 'lucide-react'; 

export interface IssueLabelData {
  name: string;
  color: string;
}

export type IssueType = 'issue' | 'pull-request';

// Usamos 'type' para combinar as props do componente com as props HTML
export type IssueListItemProps = {
  /** O título da Issue/PR. */
  title: string;
  /** O número da Issue/PR (ex: #123). */
  number: number;
  /** O tipo de item (Issue ou Pull Request). */
  type: IssueType;
  /** O status (ex: open, closed). */
  status: 'open' | 'closed';
  /** Lista de labels associados. */
  labels: IssueLabelData[];
  /** Metadado: Nome do autor e data (ex: 'aberto por d3vlopes há 3 dias'). */
  metadata: string;
  /** URL para o item. */
  href: string;
} & HTMLAttributes<HTMLDivElement>; 

/**
 * Organismo IssueListItem: representa uma única linha na lista de Issues/PRs do GitHub.
 */
export const IssueListItem: React.FC<IssueListItemProps> = ({
  title,
  number,
  type,
  status,
  labels,
  metadata,
  href,
  className = '',
  ...props
}) => {
  // 1. Definição do Ícone e Cores
  // CORREÇÃO: Usamos AlertCircle para issues
  let StatusIcon = AlertCircle; 
  let iconColor: 'success' | 'danger' | 'default';

  if (type === 'pull-request') {
    StatusIcon = GitPullRequest;
    iconColor = status === 'open' ? 'success' : 'danger';
  } else {
    // É uma Issue
    StatusIcon = AlertCircle; // Ícone de Issue
    iconColor = status === 'open' ? 'success' : 'danger';
  }

  const itemClasses = [styles.issueListItem, className].join(' ').trim();

  return (
    <div className={itemClasses} {...props}>
      {/* Coluna 1: Ícone de Status */}
      <div className={styles.iconColumn}>
        <Icon icon={StatusIcon} size="medium" color={iconColor} ariaLabel={`Status: ${status} ${type}`} />
      </div>

      {/* Coluna 2: Conteúdo Principal */}
      <div className={styles.contentColumn}>
        <div className={styles.titleAndLabels}>
          {/* Título Principal */}
          <Link href={href} className={styles.titleLink}>
            <Text asSpan size="large" variant="bold">
              {title}
            </Text>
          </Link>
          
          {/* Labels (Tags) */}
          <div className={styles.labelsContainer}>
            {labels.map((label) => (
              <IssueLabel key={label.name} name={label.name} color={label.color} />
            ))}
          </div>
        </div>
        
        {/* Metadados (em baixo) */}
        <div className={styles.metadata}>
          <Text size="small" variant="muted">
            #{number} {metadata}
          </Text>
        </div>
      </div>
    </div>
  );
};