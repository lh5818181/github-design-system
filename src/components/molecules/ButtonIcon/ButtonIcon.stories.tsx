// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';

import { ButtonIcon, IconType } from '.';

const meta: Meta<typeof ButtonIcon> = {
  title: 'Molecules/ButtonIcon',
  component: ButtonIcon,
  args: {
    icon: IconType.HAMBURGER,
    isMany: false,
  },
};

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

const template: Story = {
  render: (args) => <ButtonIcon {...args} />,
};

export const Default: Story = {
  ...template,
};

export const ManyIcons: Story = {
  ...template,
  args: {
    isMany: true,
  },
};