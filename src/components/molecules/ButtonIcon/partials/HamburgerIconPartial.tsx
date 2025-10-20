import { Button } from '../../../atoms/Button';
import { Image } from '../../../atoms/Image';

import HamburgerIcon from '../assets/hamburger.svg';

export const HamburgerIconPartial = () => {
  return (
    <Button variant="invisible">
      <Image src={HamburgerIcon} alt="Ícone de 3 barras na horizontal" />
    </Button>
  );
};