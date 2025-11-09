import { Meta, StoryObj } from '@storybook/react';
import { Link, LinkProps } from '.';

const meta: Meta<LinkProps> = {
  title: 'atoms/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
    variant: { control: 'select', options: ['default', 'subtle', 'danger'] },
  },
  args: {
    href: 'https://github.com',
    children: 'Visitar o GitHub',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<LinkProps>;

// 1. Link Padrão
export const Default: Story = {};

// 2. Link Sutil (para texto auxiliar)
export const Subtle: Story = {
  args: {
    children: 'Ver detalhes de licença.',
    variant: 'subtle',
  },
};

// 3. Link de Perigo (para ações de exclusão)
export const Danger: Story = {
  args: {
    children: 'Excluir repositório',
    variant: 'danger',
  },
};