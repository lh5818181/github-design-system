import type { Meta, StoryObj } from '@storybook/react-vite';

import { Image } from '.';

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  args: {
    src: 'https://res.cloudinary.com/dbnq26wqe/image/upload/v1700505897/others/image_j8ej2v.jpg',
    alt: 'Avatar do usuário',
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

const template: Story = {
  render: (args) => <Image {...args} />,
};

export const Default: Story = {
  ...template,
};
