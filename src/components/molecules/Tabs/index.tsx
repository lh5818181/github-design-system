import styles from './styles.module.scss';
import { Link } from '../../atoms/Link';
import { Icon } from '../../atoms/Icon';
import { LucideIcon } from 'lucide-react';

// Tipo para definir a estrutura de cada aba
export type TabItem = {
  id: string;
  label: string;
  icon?: LucideIcon; // O componente do ícone
  href: string;
  isActive?: boolean;
  count?: number; // Contador de itens (ex: 5 Issues)
};

export type TabsProps = {
  /** Array de objetos que representam as abas. */
  items: TabItem[];
  /** Função de callback ao clicar em uma aba (opcional, para navegação SPA). */
  onTabClick?: (id: string) => void;
};

export const Tabs = ({ items, onTabClick }: TabsProps) => {
  return (
    <nav className={styles.container}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={(e) => {
            if (onTabClick) {
              e.preventDefault(); // Previne navegação se houver callback
              onTabClick(item.id);
            }
          }}
          // Usa 'unstyled' para que o link não tenha estilo padrão e possamos aplicar o estilo da aba
          unstyled
          className={[styles.tab, item.isActive ? styles.active : ''].join(' ').trim()}
        >
          {item.icon && (
            <span className={styles.iconWrapper}>
              {/* Renderiza o Ícone (Átomo) */}
              <Icon icon={item.icon} size="small" ariaLabel={`Navegar para ${item.label}`} />
            </span>
          )}

          <span className={styles.label}>{item.label}</span>

          {item.count !== undefined && item.count > 0 && (
            <span className={styles.count}>{item.count}</span>
          )}
        </Link>
      ))}
    </nav>
  );
};
