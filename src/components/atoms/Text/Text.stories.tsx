import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '.';

const meta: Meta<TextProps> = {
  title: 'atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['default', 'muted', 'bold'] },
    asSpan: { control: 'boolean' },
  },
  args: {
    children:
      'Este é um parágrafo de texto padrão, usado para a descrição de projetos ou documentação.',
  },
};

export default meta;

type Story = StoryObj<TextProps>;

// 1. Texto Padrão (Medium Default)
export const Default: Story = {};

// 2. Texto Muted (para metadados)
export const MutedSmall: Story = {
  args: {
    size: 'small',
    variant: 'muted',
    children: 'Último commit há 5 horas por d3vlopes.',
  },
};

// 3. Texto Bold (para ênfase)
export const BoldLarge: Story = {
  args: {
    size: 'large',
    variant: 'bold',
    children: 'Atenção: A migração será feita na próxima semana.',
  },
};

// 4. Exemplo de uso inline (asSpan)
export const InlineText: Story = {
  args: {
    asSpan: true,
    size: 'medium',
    children: 'd3vlopes',
    variant: 'bold',
  },
  render: (args) => (
    <p>
      O usuário <Text {...args} /> atualizou o repositório principal.
    </p>
  ),
};
