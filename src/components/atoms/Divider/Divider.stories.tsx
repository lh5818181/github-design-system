// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Divider } from '.';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
};

export default meta;

type Story = StoryObj<typeof Divider>;

const template: Story = {
  render: () => <Divider />,
};

export const Default: Story = {
  ...template,
};
