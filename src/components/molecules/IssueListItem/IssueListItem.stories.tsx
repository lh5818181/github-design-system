import { Meta, StoryObj } from '@storybook/react-vite';
import { IssueListItem, IssueListItemProps } from '.';

const mockLabels = [
  { label: 'bug', color: '#d73a4a', onClick: () => console.log('Filter by bug') },
  { label: 'documentation', color: '#0075ca', onClick: () => console.log('Filter by docs') },
];

const meta: Meta<IssueListItemProps> = {
  title: 'molecules/IssueListItem',
  component: IssueListItem,
  tags: ['autodocs'],
  args: {
    title: 'Adicionar funcionalidade de Dark Mode no ThemeContext',
    number: 145,
    status: 'open',
    href: '#issue/145',
    labels: mockLabels,
    author: 'd3vlopes',
    authorAvatarSrc: 'https://avatars.githubusercontent.com/u/100?v=4',
    openedDateText: 'opened 5 days ago',
    commentsCount: 7,
  },
  decorators: [
    (Story) => (
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, border: '1px solid #d0d7de', borderRadius: '6px', maxWidth: '800px' }}>
        <Story />
      </ul>
    ),
  ],
};

export default meta;

type Story = StoryObj<IssueListItemProps>;

// 1. Issue Aberta Padrão
export const OpenIssue: Story = {};

// 2. Pull Request (PR)
export const PullRequest: Story = {
  args: {
    title: 'Implementa o componente IssueListItem',
    number: 146,
    status: 'pr',
    commentsCount: 3,
    labels: [{ label: 'enhancement', color: '#a2eeef', onClick: () => {} }],
  },
};

// 3. Issue Fechada
export const ClosedIssue: Story = {
  args: {
    title: 'Problema de carregamento de fontes no Safari',
    number: 147,
    status: 'closed',
    commentsCount: 0,
    openedDateText: 'closed on Oct 25',
    labels: mockLabels.slice(0, 1),
  },
};