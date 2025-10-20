// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from '@storybook/react';
import { Image } from '.';

const meta: Meta<typeof Image> = {
  title: 'atoms/Image',
  component: Image,
  args: {
    src: 'https://res.cloudinary.com/dbnq26wqe/image/upload/v1700505897/others/image_j8ej2v.jpg',
    alt: 'Avatar do usuário',
  }
};

export default meta;

type Story = StoryObj<typeof Image>;

const Template: Story = {
  render: (args) => <Image {...args} />,
};

export const Default: Story = {
  ...Template,
};
