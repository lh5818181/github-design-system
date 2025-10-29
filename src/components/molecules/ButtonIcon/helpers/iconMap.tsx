import { IconType } from '..';

import { InboxIconPartial } from '../partials/InboxIconPartial';
import { CopilotIconPartial } from '../partials/CopilotIconPartial';
import { HamburgerIconPartial } from '../partials/HamburgerIconPartial';

export const iconMap: Record<IconType, JSX.Element> = {
  hamburger: <HamburgerIconPartial />,
  inbox: <InboxIconPartial />,
  copilot: <CopilotIconPartial />,
};
