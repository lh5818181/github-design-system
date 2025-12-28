import { Meta, StoryObj } from '@storybook/react-vite';
import { IssueLabel, IssueLabelProps } from '.';

const meta: Meta<IssueLabelProps> = {
  title: 'molecules/IssueLabel',
  component: IssueLabel,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    color: { control: 'color', description: 'Cor hexadecimal do rótulo (ex: #cf222e).' },
  },
  args: {
    name: 'bug',
    color: '#d73a4a',
  },
};

export default meta;

type Story = StoryObj<IssueLabelProps>;

// 1. Label de Bug (Fundo Escuro, Texto Claro)
export const Bug: Story = {
  args: {
    name: 'bug',
    color: '#d73a4a', // Vermelho (Escuro o suficiente para texto claro)
  },
};

// 2. Label de Documentação (Fundo Claro, Texto Escuro)
export const Documentation: Story = {
  args: {
    name: 'documentation',
    color: '#0075ca', // Azul claro/médio (Depende da implementação da luminância, mas o GitHub usa cores que forçam o contraste)
  },
};

// 3. Label de Feature (Fundo Claro, Texto Escuro)
export const Feature: Story = {
  args: {
    name: 'feature',
    color: '#a2eeef', // Ciano muito claro (Texto escuro)
  },
};

// 4. Label de UI/UX (Fundo muito Escuro, Texto Claro)
export const UX: Story = {
  args: {
    name: 'ui/ux',
    color: '#5319e7', // Roxo (Escuro)
  },
};