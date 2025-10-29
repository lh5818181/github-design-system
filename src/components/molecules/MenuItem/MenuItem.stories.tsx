// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';

import DiscussionsIcon from './assets/discussions-icon.svg';
import CodeIcon from './assets/code-icon.svg';

import { MenuItem } from '.';

const meta: Meta<typeof MenuItem> = {
  title: 'Molecules/MenuItem',
  component: MenuItem,
  args: {
    label: 'Discussions',
    isBadge: false,
    icon: {
      src: DiscussionsIcon,
      alt: 'Loren ipsum dolor',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

const template: Story = {
  render: (args) => <MenuItem {...args} />,
};

export const Default: Story = {
  ...template,
};

export const WithBadge: Story = {
  ...template,
  args: {
    label: 'Code',
    count: 20,
    isBadge: true,
    icon: {
      src: CodeIcon,
      alt: 'Loren ipsum dolor',
    },
  },
};
