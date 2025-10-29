import { Star, GitBranch } from 'lucide-react';

export const mockData = {
  defaultProps: {
    name: 'design-system-do-github',
    url: 'https://github.com/lh5818181/design-system-do-github',
    description:
      'Design System recriado com base nas diretrizes visuais do GitHub para fins de estudo.',
    language: 'TypeScript',
    languageColor: '#3178C6', // Cor TypeScript
    metadata: [
      { icon: Star, value: 15, label: 'Estrelas' },
      { icon: GitBranch, value: 5, label: 'Forks' },
    ],
    isPrivate: false,
  },
};
