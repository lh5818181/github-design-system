// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Header } from '.';

import { headerMock } from './mock';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  args: headerMock,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

const template: Story = {
  render: (args) => <Header {...args} />,
};

export const Default: Story = {
  ...template,
};
