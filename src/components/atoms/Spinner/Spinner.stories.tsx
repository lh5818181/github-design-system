import { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner, SpinnerProps } from '.';

const meta: Meta<SpinnerProps> = {
  title: 'atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    color: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<SpinnerProps>;

// 1. Todas as Variações de Tamanho
export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Spinner size="small" aria-label="Small Spinner" />
      <Spinner size="medium" aria-label="Medium Spinner" />
      <Spinner size="large" aria-label="Large Spinner" />
    </div>
  ),
};

// 2. Com Cor Customizada (Ex: Vermelho de Erro)
export const CustomColor: Story = {
  args: {
    size: 'large',
    color: '#cf222e', // Vermelho do GitHub (Error)
  },
};
