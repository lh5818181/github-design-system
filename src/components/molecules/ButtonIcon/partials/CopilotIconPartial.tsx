import { Button } from '../../../atoms/Button';
import { Image } from '../../../atoms/Image';

import CopilotIcon from '../assets/copilot.svg';

export const CopilotIconPartial = () => {
  return (
    <Button variant="invisible">
      <Image src={CopilotIcon} alt="Ícone de um piloto robô" />
    </Button>
  );
};
