import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from '.';

const meta: Meta<InputProps> = {
  title: 'atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    ariaLabel: { control: 'text', description: 'Rótulo de acessibilidade. Use se o <input> não tiver um <label> visível.' }
  },
  args: {
    placeholder: 'Digite seu nome de usuário...',
    error: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<InputProps>;

// 1. Input Padrão
export const Default: Story = {};

// 2. Input com Estado de Erro
export const ErrorState: Story = {
  args: {
    placeholder: 'O nome de usuário não pode ser vazio.',
    error: true,
  },
};

// 3. Input Desabilitado
export const DisabledState: Story = {
  args: {
    placeholder: 'Este campo está desabilitado.',
    disabled: true,
  },
};

// 4. Input com Valor Preenchido (Simulando um valor padrão)
export const WithValue: Story = {
  args: {
    defaultValue: 'd3vlopes',
  },
};