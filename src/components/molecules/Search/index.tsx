import { Icon } from '../Icon';

import LupeIcon from './icons/lupe.svg';
import commandPaletteIcon from './icons/command-palette.svg';

import styles from './styles.module.scss';

export const Search = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Icon src={LupeIcon} alt="Ícone de uma lupa" />

        <div>
          <span>
            Type {''}
            <div className={styles.lineIconContainer}>/</div>
            to search
          </span>
        </div>

        <div className={styles.commandPaletteContainer}>
          <Icon src={commandPaletteIcon} alt="Ícone de uma linha de comando" />
        </div>
      </div>
    </div>
  );
};
