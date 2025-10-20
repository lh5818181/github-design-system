import { Image } from '../../atoms/Image';

import LupeIcon from './assets/lupe.svg';
import commandPaletteIcon from './assets/command-palette.svg';

import styles from './styles.module.scss';

export const Search = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image src={LupeIcon} alt="Ícone de uma lupa" />

        <div>
          <span>
            Type {''}
            <div className={styles.lineIconContainer}>/</div>
            to search
          </span>
        </div>

        <div className={styles.commandPaletteContainer}>
          <Image src={commandPaletteIcon} alt="Ícone de uma linha de comando" />
        </div>
      </div>
    </div>
  );
};