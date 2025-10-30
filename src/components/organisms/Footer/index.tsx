import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Link } from '../../atoms/Link'; 
import { Text } from '../../atoms/Text';
import { Github } from 'lucide-react';

export type FooterProps = {
  /** Links a serem exibidos no rodapé. */
  links: { label: string; href: string }[];
} & HTMLAttributes<HTMLElement>;

export const Footer = ({
  links,
  ...props
}: FooterProps) => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} {...props}>
      <div className={styles.content}>
        
        {/* Logo do GitHub (Simulada pelo ícone) */}
        <div className={styles.logo}>
          <Github size={24} color="#6e7781" aria-label="GitHub Logo" />
        </div>
        
        {/* Direitos Autorais e Ano */}
        <div className={styles.copyright}>
            <Text size="small" variant="muted">
                &copy; {currentYear} GitHub, Inc.
            </Text>
        </div>

        {/* Links de Navegação */}
        <nav className={styles.navLinks}>
          <ul className={styles.linkList}>
            {links.map((link) => (
              <li key={link.href} className={styles.listItem}>
                <Link 
                  href={link.href} 
                  variant="default"
                  unstyled
                  className={styles.footerLink}
                >
                  <Text asSpan size="small" variant="muted">
                    {link.label}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};