// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from '@storybook/react-vite';
import { Input, InputProps } from '.';

import { Search } from 'lucide-react';

// Define a metainformação da história
const meta: Meta<InputProps> = {
  title: 'atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' }, // Ícones são passados como JSX
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    placeholder: 'Digite algo...',
  },
};

export default meta;

type Story = StoryObj<InputProps>;

// 1. Variação Padrão
export const Default: Story = {};

// 2. Com Placeholder
export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Pesquisar no GitHub...',
  },
};

// 3. Com Ícone
export const WithIcon: Story = {
  args: {
    icon: <Search size={16} />, // Ícone de Lupa
    placeholder: 'Pesquisar em repositórios...',
  },
};

// 4. Em Estado de Erro
export const ErrorState: Story = {
  args: {
    error: true,
    value: 'Nome de usuário inválido',
  },
};

// 5. Desabilitado
export const DisabledState: Story = {
  args: {
    disabled: true,
    value: 'Conteúdo desabilitado',
  },
};
