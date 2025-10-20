import { IconType } from '..';

import { iconMap } from '../helpers/iconMap';

export const renderSingleIcon = (icon: IconType) => {
  return iconMap[icon];
};