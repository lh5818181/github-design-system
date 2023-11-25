import { Icon } from '../../Icon';
import { Button } from '../../../atoms/Button';

import Plus from '../assets/plus.svg';
import Arrow from '../assets/arrow.svg';

export const renderManyIcons = () => {
  return (
    <>
      <Button variant="invisible">
        <Icon src={Plus} alt="Sinal de mais" />
      </Button>

      <Button variant="invisible">
        <Icon src={Arrow} alt="Flecha para baixo" />
      </Button>
    </>
  );
};
