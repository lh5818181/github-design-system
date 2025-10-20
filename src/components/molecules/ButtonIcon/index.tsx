import { renderManyIcons } from './renders/renderManyIcons';
import { renderSingleIcon } from './renders/renderSingleIcon';

import styles from './styles.module.scss';

export enum IconType {
  HAMBURGER = 'hamburger',
  INBOX = 'inbox',
  COPILOT = 'copilot',
}

export interface ButtonIconProps {
  icon?: IconType;
  isMany?: boolean;
}

export const ButtonIcon = ({
  icon = IconType.HAMBURGER,
  isMany = false,
}: ButtonIconProps) => {
  const classNames = `${styles.wrapper} ${isMany ? styles.large : ''}`;

  return (
    <div className={classNames}>
      {isMany ? renderManyIcons() : renderSingleIcon(icon)}
    </div>
  );
};