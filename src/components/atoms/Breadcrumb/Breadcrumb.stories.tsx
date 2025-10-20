// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from '.';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  args: {
    previousPage: {
      text: 'stripe',
      target: '#',
    },
    currentPage: {
      text: 'react-stripe-js',
      target: '#',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

const template: Story = {
  render: (args) => <Breadcrumb {...args} />,
};

export const Default: Story = {
  ...template,
};