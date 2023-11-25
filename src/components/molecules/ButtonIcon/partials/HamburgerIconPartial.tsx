import { Button } from '../../../atoms/Button';
import { Icon } from '../../Icon';

import HamburgerIcon from '../assets/hamburger.svg';

export const HamburgerIconPartial = () => {
  return (
    <Button variant="invisible">
      <Icon src={HamburgerIcon} alt="Ícone de 3 barras na horizontal" />
    </Button>
  );
};
