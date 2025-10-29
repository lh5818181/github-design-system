import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../../atoms/Icon';          
import { Link } from '../../atoms/Link';          
import { Text } from '../../atoms/Text';          
import { Avatar } from '../../atoms/Avatar';      
import { IssueLabel, IssueLabelProps } from '../../molecules/IssueLabel';

// Ícones de status da Issue
import { AlertCircle, GitPullRequest, MessageSquare } from 'lucide-react';

export type IssueStatus = 'open' | 'closed' | 'draft' | 'pr';

export type IssueListItemProps = {
  /** Título da Issue/PR */
  title: string;
  /** Número da Issue/PR */
  number: number;
  /** Status da Issue/PR ('open', 'closed', 'pr'). */
  status: IssueStatus;
  /** URL para a Issue/PR. */
  href: string;
  /** Labels associadas a esta Issue. */
  labels: IssueLabelProps[];
  /** Nome do autor que abriu a Issue. */
  author: string;
  /** URL do avatar do autor. */
  authorAvatarSrc: string;
  /** Data em que a Issue foi aberta (ex: "opened 5 days ago"). */
  openedDateText: string;
  /** Número de comentários. */
  commentsCount?: number;
} & HTMLAttributes<HTMLLIElement>;

// Mapeamento de ícones e cores para o status
const statusMap = {
  open: { icon: AlertCircle, color: '#0969da' },
  closed: { icon: AlertCircle, color: '#8250df' }, // Purple no GitHub
  draft: { icon: AlertCircle, color: '#6e7781' },
  pr: { icon: GitPullRequest, color: '#8250df' },
};

export const IssueListItem = ({
  title,
  number,
  status,
  href,
  labels,
  author,
  authorAvatarSrc,
  openedDateText,
  commentsCount,
  className,
  ...props
}: IssueListItemProps) => {
  
  const StatusIcon = statusMap[status].icon;
  const statusColor = statusMap[status].color;

  return (
    <li className={[styles.listItem, className].join(' ').trim()} {...props}>
      {/* Coluna 1: Ícone de Status */}
      <div className={styles.statusIcon}>
        <Icon 
          icon={StatusIcon} 
          size="medium" 
          ariaLabel={status} 
          style={{ color: statusColor }}
        />
      </div>

      {/* Coluna 2: Conteúdo Principal (Título e Labels) */}
      <div className={styles.mainContent}>
        {/* Título (Link) */}
        <Link href={href} variant="default" className={styles.issueTitle}>
          {title}
        </Link>
        
        {/* Labels */}
        <div className={styles.labelsContainer}>
          {labels.map((labelProps, index) => (
            <IssueLabel key={index} {...labelProps} />
          ))}
        </div>

        {/* Metadados Inferiores */}
        <div className={styles.metaData}>
          <Text asSpan size="small" variant="muted">
            #{number} {openedDateText} by 
          </Text>
          <Link href={`#user/${author}`} variant="default" unstyled>
            <Text asSpan size="small">{author}</Text>
          </Link>
        </div>
      </div>

      {/* Coluna 3: Comentários e Assinees (Lateral Direita) */}
      <div className={styles.sidebar}>
        {/* Contagem de Comentários */}
        {commentsCount !== undefined && commentsCount > 0 && (
          <div className={styles.comments}>
            <Icon icon={MessageSquare} size="small" ariaLabel="Comentários" className={styles.commentIcon} />
            <Text asSpan size="small" variant="muted" className={styles.commentCount}>
              {commentsCount}
            </Text>
          </div>
        )}

        {/* Avatar do Assinee (simulado) */}
        <Avatar 
          src={authorAvatarSrc} // Usando o autor como assinee para simplificar
          alt={`Assigned to ${author}`} 
          size="small" 
          className={styles.assigneeAvatar}
        />
      </div>
    </li>
  );
};