import { Button } from '../../../atoms/Button';
import { Image } from '../../../atoms/Image';

import Plus from '../assets/plus.svg';
import Arrow from '../assets/arrow.svg';

export const renderManyIcons = () => {
  return (
    <>
      <Button variant="invisible">
        <Image src={Plus} alt="Sinal de mais" />
      </Button>

      <Button variant="invisible">
        <Image src={Arrow} alt="Flecha para baixo" />
      </Button>
    </>
  );
};