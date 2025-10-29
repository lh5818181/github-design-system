import { Meta, StoryObj } from '@storybook/react';
import { IssueLabel, IssueLabelProps } from '.';

const meta: Meta<IssueLabelProps> = {
  title: 'molecules/IssueLabel',
  component: IssueLabel,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: { control: 'color' },
    isOutline: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<IssueLabelProps>;

// Função para gerar uma cor de texto que contraste
const getTextColorStyle = (bgColor: string) => {
  const r = parseInt(bgColor.substring(1, 3), 16);
  const g = parseInt(bgColor.substring(3, 5), 16);
  const b = parseInt(bgColor.substring(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? 'black' : 'white';
};

// 1. Variação Padrão (Filled)
export const DefaultFilled: Story = {
  args: {
    label: 'bug',
    color: '#d73a4a', // Vermelho de erro
  },
};

// 2. Variação de Sucesso (Ex: Status: Completed)
export const SuccessLabel: Story = {
  args: {
    label: 'documentation',
    color: '#0075ca', // Azul de informação
  },
};

// 3. Variação Outline (Usado em filtros)
export const OutlineLabel: Story = {
  args: {
    label: 'enhancement',
    color: '#a2eeef', // Cor pastel (fundo claro)
    isOutline: true,
  },
};

// 4. Lista de Labels (Exemplo de uso)
export const LabelList: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', padding: '16px', border: '1px solid #d0d7de', borderRadius: '6px' }}>
      <IssueLabel label="bug" color="#d73a4a" />
      <IssueLabel label="feature" color="#a2eeef" />
      <IssueLabel label="help wanted" color="#0075ca" />
      <IssueLabel label="maintenance" color="#5319e7" isOutline={true} />
    </div>
  ),
};