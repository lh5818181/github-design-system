import type { Meta, StoryObj } from '@storybook/react';

import CopilotIcon from './assets/copilot.svg';

import { Icon } from '.';

const meta: Meta<typeof Icon> = {
  title: 'Molecules/Icon',
  component: Icon,
  args: {
    src: CopilotIcon,
    alt: 'Loren ipsum dolor',
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

const template: Story = {
  render: (args) => <Icon {...args} />,
};

export const Default: Story = {
  ...template,
};
