import { Meta, StoryObj } from '@storybook/react';
import { RepositoryCard, RepositoryCardProps } from '.';
import { mockData } from './mock';
import { Star, GitBranch } from 'lucide-react';

const meta: Meta<RepositoryCardProps> = {
  title: 'molecules/RepositoryCard',
  component: RepositoryCard,
  tags: ['autodocs'],
  args: {
    ...mockData.defaultProps,
  },
  argTypes: {
    metadata: { control: { disable: true } }, // Passado via mock
    isPrivate: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<RepositoryCardProps>;

// 1. Repositório Público Padrão
export const DefaultPublic: Story = {};

// 2. Repositório Privado
export const Private: Story = {
  args: {
    name: 'meu-projeto-secreto',
    description: 'Um projeto em andamento que ainda não está pronto para o público.',
    isPrivate: true,
  },
};

// 3. Repositório em Linguagem Diferente
export const PythonRepo: Story = {
  args: {
    name: 'data-analyzer',
    description: 'Scripts para análise de dados usando pandas e numpy.',
    language: 'Python',
    languageColor: '#3572A5', // Cor Python
    metadata: [
      { icon: Star, value: 543, label: 'Estrelas' },
      { icon: GitBranch, value: 12, label: 'Forks' },
    ],
  },
};
