import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const template: Story = {
  render: (args) => <Button {...args} />,
};

export const Default: Story = {
  ...template,
};
