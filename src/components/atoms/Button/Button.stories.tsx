// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
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

export const Primary: Story = {
  ...template,
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  ...template,
  args: {
    variant: 'secondary',
  },
};

export const Danger: Story = {
  ...template,
  args: {
    variant: 'danger',
  },
};

export const Invisible: Story = {
  ...template,
  args: {
    variant: 'invisible',
  },
};
