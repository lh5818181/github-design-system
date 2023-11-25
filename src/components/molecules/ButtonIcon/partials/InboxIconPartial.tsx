import { Button } from '../../../atoms/Button';
import { Icon } from '../../Icon';

import InboxIcon from '../assets/inbox.svg';

export const InboxIconPartial = () => {
  return (
    <Button variant="invisible">
      <Icon src={InboxIcon} alt="Um ícone de caixa de entrada" />
    </Button>
  );
};
