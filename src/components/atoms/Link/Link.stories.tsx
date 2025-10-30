// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from '@storybook/react-vite';
import { Link, LinkProps } from '.';

const meta: Meta<LinkProps> = {
  title: 'atoms/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'muted', 'danger'] },
    unstyled: { control: 'boolean' },
    href: { control: 'text' },
  },
  args: {
    href: '#', // Define um link dummy para o Storybook
    children: 'Link de Navegação',
  },
};

export default meta;

type Story = StoryObj<LinkProps>;

// 1. Link Padrão (Default)
export const Default: Story = {};

// 2. Link Muted (Para metadados/descrições)
export const Muted: Story = {
  args: {
    variant: 'muted',
    children: 'Link Secundário (Muted)',
  },
};

// 3. Link Danger (Para ações destrutivas)
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Deletar Repositório',
  },
};

// 4. Link Unstyled (Parece texto, mas é clicável)
export const Unstyled: Story = {
  args: {
    unstyled: true,
    children: 'Link sem Estilo',
  },
  render: (args) => (
    <p>
      Este é um parágrafo com um <Link {...args} /> embutido.
    </p>
  ),
};
