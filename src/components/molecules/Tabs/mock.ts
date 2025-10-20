import { Code, GitPullRequest, AlertTriangle, MessageSquare } from 'lucide-react';

export const mockData = {
  defaultProps: {
    items: [
      { id: 'code', label: 'Code', icon: Code, href: '#code', isActive: true },
      { id: 'issues', label: 'Issues', icon: AlertTriangle, href: '#issues', count: 5 },
      { id: 'pulls', label: 'Pull Requests', icon: GitPullRequest, href: '#pulls', count: 1 },
      { id: 'discussions', label: 'Discussions', icon: MessageSquare, href: '#discussions' },
    ],
  }
};