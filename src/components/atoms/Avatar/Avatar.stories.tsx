// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarProps } from '.';

// URL de uma imagem de exemplo (pode ser substituída por uma URL real de mock)
const EXAMPLE_IMAGE_URL = 'https://avatars.githubusercontent.com/u/100?v=4';

const meta: Meta<AvatarProps> = {
  title: 'atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', 'xlarge'] },
    src: { control: 'text' },
  },
  args: {
    src: EXAMPLE_IMAGE_URL,
    alt: 'Avatar do Usuário',
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<AvatarProps>;

// 1. Avatar Padrão (Tamanho Médio)
export const Default: Story = {};

// 2. Todos os Tamanhos
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
      <Avatar {...args} size="small" alt="Avatar Small" />
      <Avatar {...args} size="medium" alt="Avatar Medium" />
      <Avatar {...args} size="large" alt="Avatar Large" />
      <Avatar {...args} size="xlarge" alt="Avatar XLarge" />
    </div>
  ),
  args: {
    src: EXAMPLE_IMAGE_URL,
  },
};

// 3. Avatar com Destaque (Highlight)
export const Highlighted: Story = {
  args: {
    size: 'large',
    highlight: true,
  },
};

// 4. Avatar com Falha (Testando o Fallback)
export const Fallback: Story = {
  args: {
    src: 'url-que-nao-existe.jpg',
    size: 'large',
  },
};
