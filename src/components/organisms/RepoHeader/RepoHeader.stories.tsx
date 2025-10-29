import { Meta, StoryObj } from '@storybook/react';
import { RepoHeader, RepoHeaderProps } from '.';
import { Star, GitBranch, AlertTriangle, GitPullRequest, Code, MessageSquare } from 'lucide-react';

const mockTabs = [
  { id: 'code', label: 'Code', icon: Code, href: '#code', isActive: true },
  { id: 'issues', label: 'Issues', icon: AlertTriangle, href: '#issues', count: 12 },
  { id: 'pulls', label: 'Pull Requests', icon: GitPullRequest, href: '#pulls', count: 5 },
  { id: 'discussions', label: 'Discussions', icon: MessageSquare, href: '#discussions' },
];

const mockActions = [
  {
    label: 'Watch',
    icon: Star,
    count: 35,
    onClick: () => alert('Watching!'),
    variant: 'secondary' as const,
  },
  {
    label: 'Fork',
    icon: GitBranch,
    count: 10,
    onClick: () => alert('Forking...'),
    variant: 'secondary' as const,
  },
];

const meta: Meta<RepoHeaderProps> = {
  title: 'organisms/RepoHeader',
  component: RepoHeader,
  tags: ['autodocs'],
  args: {
    owner: 'd3vlopes',
    repoName: 'github-design-system',
    isPrivate: false,
    description:
      'Um projeto de código aberto para recriar os componentes base do GitHub usando React, Storybook e Atomic Design.',
    tabs: mockTabs,
    actions: mockActions,
  },
  argTypes: {
    tabs: { control: false },
    actions: { control: false },
  },
};

export default meta;

type Story = StoryObj<RepoHeaderProps>;

// 1. Repositório Público Padrão
export const DefaultPublic: Story = {};

// 2. Repositório Privado com Status de Alerta
export const PrivateRepo: Story = {
  args: {
    owner: 'empresa-x',
    repoName: 'internal-api-v2',
    isPrivate: true,
    description: 'API interna de alta performance para microserviços. Acesso restrito.',
  },
};
