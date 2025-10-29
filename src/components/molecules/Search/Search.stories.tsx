// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';

import { Search } from '.';

const meta: Meta<typeof Search> = {
  title: 'Molecules/Search',
  component: Search,
};

export default meta;

type Story = StoryObj<typeof Search>;

const template: Story = {
  render: () => <Search />,
};

export const Default: Story = {
  ...template,
};
