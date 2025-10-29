// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsProps, TabItem } from '.';
import { Code, GitPullRequest, AlertTriangle, MessageSquare } from 'lucide-react';

const mockItems: TabItem[] = [
  { id: 'code', label: 'Code', icon: Code, href: '#code', isActive: true },
  { id: 'issues', label: 'Issues', icon: AlertTriangle, href: '#issues', count: 5 },
  { id: 'pulls', label: 'Pull Requests', icon: GitPullRequest, href: '#pulls', count: 1 },
  { id: 'discussions', label: 'Discussions', icon: MessageSquare, href: '#discussions' },
];

const meta: Meta<TabsProps> = {
  title: 'molecules/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    items: mockItems,
  },
};

export default meta;

type Story = StoryObj<TabsProps>;

// 1. Variação Padrão
export const Default: Story = {};

// 2. Com Ação de Click (Simulando uma navegação em SPA)
export const WithClickAction: Story = {
  args: {
    items: mockItems,
    onTabClick: (id) => alert(`Navegando para a aba: ${id}`),
  },
};
