import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Avatar } from '../../atoms/Avatar';     
import { Heading } from '../../atoms/Heading';     
import { Text } from '../../atoms/Text';           
import { Button } from '../../atoms/Button';       
import { Icon } from '../../atoms/Icon';           
import { Link } from '../../atoms/Link';           
import { Users, MapPin, Mail, Link as LinkIcon, LucideIcon } from 'lucide-react'; // Ícones

// Interface para os metadados do perfil (Localização, Email, Link)
export type ProfileMetaData = {
  icon: LucideIcon;
  value: string | React.ReactNode;
  isLink?: boolean;
  href?: string;
};

export type ProfileBoxProps = {
  /** URL da imagem do perfil. */
  avatarSrc: string;
  /** Nome de usuário no GitHub (ID). */
  username: string;
  /** Nome completo (opcional). */
  fullName?: string;
  /** Biografia. */
  bio?: string;
  /** Botão primário (ex: Edit Profile). */
  primaryAction: {
    label: string;
    onClick: () => void;
  };
  /** Contagem de seguidores. */
  followersCount: number;
  /** Contagem de quem está seguindo. */
  followingCount: number;
  /** Lista de metadados (localização, email, website). */
  metadata: ProfileMetaData[];
} & HTMLAttributes<HTMLDivElement>;

export const ProfileBox = ({
  avatarSrc,
  username,
  fullName,
  bio,
  primaryAction,
  followersCount,
  followingCount,
  metadata,
  ...props
}: ProfileBoxProps) => {

  return (
    <div className={styles.container} {...props}>
      {/* 1. Avatar e Nome */}
      <div className={styles.avatarSection}>
        <Avatar src={avatarSrc} alt={`${fullName || username} avatar`} size="xlarge" className={styles.largeAvatar} />
      </div>

      <Heading level="h2" noMargin className={styles.fullName}>
        {fullName}
      </Heading>
      <Text variant="muted" size="large" className={styles.usernameText}>
        {username}
      </Text>

      {/* 2. Botão de Ação */}
      <div className={styles.actionSection}>
        <Button 
          variant="secondary" 
          onClick={primaryAction.onClick} 
          isFullWidth
        >
          {primaryAction.label}
        </Button>
      </div>

      {/* 3. Biografia */}
      {bio && (
        <Text size="medium" className={styles.bio}>
          {bio}
        </Text>
      )}
      
      {/* 4. Seguidores */}
      <div className={styles.followersSection}>
        <Icon icon={Users} size="small" ariaLabel="Seguidores" />
        <Text asSpan variant="bold" size="small">{followersCount}</Text>
        <Text asSpan variant="muted" size="small">followers</Text>
        <span className={styles.dotSeparator} aria-hidden="true">·</span>
        <Text asSpan variant="bold" size="small">{followingCount}</Text>
        <Text asSpan variant="muted" size="small">following</Text>
      </div>
      
      <hr className={styles.divider} />
      
      {/* 5. Metadados */}
      <div className={styles.metadataSection}>
        {metadata.map((item, index) => (
          <div key={index} className={styles.metadataItem}>
            <Icon icon={item.icon} size="small" ariaLabel={item.value as string} className={styles.metadataIcon} />
            {item.isLink ? (
                <Link href={item.href || '#'} variant="default" unstyled>
                    <Text asSpan size="small">{item.value}</Text>
                </Link>
            ) : (
                <Text size="small" variant="muted">{item.value}</Text>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};