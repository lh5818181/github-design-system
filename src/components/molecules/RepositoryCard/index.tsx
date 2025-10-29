import styles from './styles.module.scss';
import { Heading } from '../../atoms/Heading'; // Importa o Átomo Heading
import { Link } from '../../atoms/Link'; // Importa o Átomo Link
import { Badge } from '../../atoms/Badge'; // Importa o Átomo Badge
import { Icon } from '../../atoms/Icon'; // Importa o Átomo Icon
import { Lock, Globe, LucideIcon } from 'lucide-react'; // Ícones de exemplo

// Interface para os metadados (estrelas, forks, linguagem)
type RepoMetadata = {
  icon: LucideIcon;
  value: string | number;
  label: string;
};

// Estrutura de dados do repositório
export type RepositoryCardProps = {
  /** Nome do repositório (ex: meu-projeto-sensacional) */
  name: string;
  /** Link para o repositório. */
  url: string;
  /** Breve descrição do repositório. */
  description: string;
  /** Linguagem principal (para a cor do Badge). */
  language: string;
  /** Cor associada à linguagem (para a bolinha de status). */
  languageColor: string;
  /** Metadados (estrelas, forks). */
  metadata: RepoMetadata[];
  /** Se o repositório é privado. */
  isPrivate?: boolean;
};

export const RepositoryCard = ({
  name,
  url,
  description,
  language,
  languageColor,
  metadata,
  isPrivate = false,
}: RepositoryCardProps) => {
  // Ícone de status (Privado/Público)
  const StatusIcon = isPrivate ? Lock : Globe;
  const statusText = isPrivate ? 'Private' : 'Public';

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        {/* Título do Repositório (usando Heading e Link) */}
        <Heading level="h3" noMargin className={styles.titleWrapper}>
          <Icon
            icon={StatusIcon}
            size="small"
            ariaLabel={statusText}
            className={styles.statusIcon}
          />
          <Link href={url} variant="default" className={styles.repoLink}>
            {name}
          </Link>
        </Heading>

        {/* Badge de Status (Público/Privado) */}
        <Badge variant={isPrivate ? 'secondary' : 'default'} className={styles.statusBadge}>
          {statusText}
        </Badge>
      </header>

      {/* Descrição */}
      <p className={styles.description}>{description}</p>

      {/* Metadados (Linguagem, Estrelas, Forks) */}
      <footer className={styles.footer}>
        {/* Linguagem Principal */}
        <div className={styles.metadataItem}>
          <span
            className={styles.languageColor}
            style={{ backgroundColor: languageColor }}
            aria-hidden="true"
          />
          <span className={styles.metadataText}>{language}</span>
        </div>

        {/* Outros Metadados (Estrelas, Forks) */}
        {metadata.map((item, index) => (
          <div key={index} className={styles.metadataItem}>
            <Icon
              icon={item.icon}
              size="small"
              ariaLabel={item.label}
              className={styles.metadataIcon}
            />
            <span className={styles.metadataText}>{item.value}</span>
          </div>
        ))}
      </footer>
    </article>
  );
};
