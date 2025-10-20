import { Button } from '../../../atoms/Button';
import { Image } from '../../../atoms/Image';

import InboxIcon from '../assets/inbox.svg';

export const InboxIconPartial = () => {
  return (
    <Button variant="invisible">
      <Image src={InboxIcon} alt="Um ícone de caixa de entrada" />
    </Button>
  );
};