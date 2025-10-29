// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';

import { HomePage } from '.';

import { homePageMock } from './mock';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/HomePage',
  component: HomePage,
  args: homePageMock,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof HomePage>;

const template: Story = {
  render: (args) => <HomePage {...args} />,
};

export const Default: Story = {
  ...template,
};
