import { Button } from '../../../atoms/Button';
import { Icon } from '../../Icon';

import CopilotIcon from '../assets/copilot.svg';

export const CopilotIconPartial = () => {
  return (
    <Button variant="invisible">
      <Icon src={CopilotIcon} alt="Ícone de um piloto robô" />
    </Button>
  );
};
