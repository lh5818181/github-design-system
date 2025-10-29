import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '.';

const meta: Meta<HeadingProps> = {
  title: 'atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    noMargin: { control: 'boolean' },
  },
  args: {
    children: 'Título Padrão',
    level: 'h2',
  },
};

export default meta;

type Story = StoryObj<HeadingProps>;

// Variação que mostra todos os níveis de hierarquia
export const AllLevels: Story = {
  render: (args) => (
    <div style={{ padding: '20px', backgroundColor: '#f6f8fa' }}>
      <Heading level="h1">H1: Título Principal do Projeto</Heading>
      <Heading level="h2">H2: Seção Principal com Divisor</Heading>
      <Heading level="h3">H3: Subtítulo de Conteúdo</Heading>
      <Heading level="h4">H4: Título de Card ou Item</Heading>
      <Heading level="h5">H5: Título Secundário (Muted)</Heading>
      <Heading level="h6">H6: TÍTULO COM ÊNFASE PEQUENA</Heading>
    </div>
  ),
  args: {
    noMargin: false,
  },
};

// Variação de exemplo de uso
export const H3WithNoMargin: Story = {
  args: {
    level: 'h3',
    children: 'Título Sem Margem Abaixo',
    noMargin: true,
  },
};
