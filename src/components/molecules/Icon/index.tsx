import { Image } from '../../atoms/Image';
import type { ImageProps } from '../../atoms/Image';

import styles from './styles.module.scss';

export type IconProps = ImageProps;

export const Icon = (props: IconProps) => {
  return (
    <div className={styles.wrapper}>
      <Image {...props} />
    </div>
  );
};
