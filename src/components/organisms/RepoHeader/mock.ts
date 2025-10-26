import { Star, GitBranch, Code, AlertTriangle, GitPullRequest, MessageSquare } from 'lucide-react';
import { TabItem } from '../../molecules/Tabs'; 
import { RepoActionButton } from '.';

const mockTabs: TabItem[] = [
  { id: 'code', label: 'Code', icon: Code, href: '#code', isActive: true },
  { id: 'issues', label: 'Issues', icon: AlertTriangle, href: '#issues', count: 12 },
  { id: 'pulls', label: 'Pull Requests', icon: GitPullRequest, href: '#pulls', count: 5 },
  { id: 'discussions', label: 'Discussions', icon: MessageSquare, href: '#discussions' },
];

const mockActions: RepoActionButton[] = [
  { 
    label: 'Watch', 
    icon: Star, 
    count: 35, 
    onClick: () => console.log('Watch clicked'),
    variant: 'secondary' as const
  },
  { 
    label: 'Fork', 
    icon: GitBranch, 
    count: 10, 
    onClick: () => console.log('Fork clicked'),
    variant: 'secondary' as const
  },
];

export const mockData = {
  defaultProps: {
    owner: 'd3vlopes',
    repoName: 'github-design-system',
    isPrivate: false,
    description: 'Um projeto de código aberto para recriar os componentes base do GitHub usando React, Storybook e Atomic Design.',
    tabs: mockTabs,
    actions: mockActions,
  }
};