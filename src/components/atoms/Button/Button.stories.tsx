import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ndky1znOZhxmkNfmdk6hPY/Primer-Web?type=design&node-id=14919-49961&mode=design&t=4yi7LC3OSYlspLGD-0',
    },
  },
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
