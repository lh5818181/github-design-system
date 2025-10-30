// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '.';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  args: {
    children: 20,
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

const template: Story = {
  render: (args) => <Badge {...args} />,
};

export const Default: Story = {
  ...template,
};
