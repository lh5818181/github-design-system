// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react-vite';

import { HomeTemplate } from '.';

import { homeTemplateMock } from './mock';

const meta: Meta<typeof HomeTemplate> = {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
  args: homeTemplateMock,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof HomeTemplate>;

const template: Story = {
  render: (args) => <HomeTemplate {...args} />,
};

export const Default: Story = {
  ...template,
};
