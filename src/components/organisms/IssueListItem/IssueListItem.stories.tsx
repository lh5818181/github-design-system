import { Meta, StoryObj } from '@storybook/react-vite';
import { IssueListItem, IssueListItemProps } from '.';

const meta: Meta<IssueListItemProps> = {
  title: 'organisms/IssueListItem',
  component: IssueListItem,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['issue', 'pull-request'] },
    status: { control: 'select', options: ['open', 'closed'] },
    title: { control: 'text' },
    number: { control: 'number' },
    metadata: { control: 'text' },
    labels: { control: 'object' },
    href: { control: 'text' },
  },
  args: {
    title: 'Adicionar a Molécula Pagination ao Organismo IssueList',
    number: 145,
    type: 'issue',
    status: 'open',
    metadata: 'aberto por d3vlopes há 2 horas',
    href: '#issue-145',
    labels: [
      { name: 'enhancement', color: '#a2eeef' },
      { name: 'design-system', color: '#0075ca' },
    ],
  },
};

export default meta;

type Story = StoryObj<IssueListItemProps>;

// 1. Issue Aberta com Múltiplos Labels
export const OpenIssue: Story = {};

// 2. Pull Request Fechado
export const ClosedPullRequest: Story = {
  args: {
    title: 'feat: Implementa a autenticação via OAuth',
    number: 56,
    type: 'pull-request',
    status: 'closed',
    metadata: 'fundido por ci-bot há 5 dias',
    href: '#pr-56',
    labels: [
      { name: 'feature', color: '#a2eeef' },
      { name: 'backend', color: '#d73a4a' },
    ],
  },
};

// 3. Issue com Título Longo
export const LongTitle: Story = {
  args: {
    title: 'Investigar e corrigir um erro de concorrência que está causando falha intermitente na inicialização do servidor de cache e afeta a experiência do usuário.',
    number: 146,
    type: 'issue',
    status: 'open',
    metadata: 'aberto por team-lead há 1 dia',
    labels: [
      { name: 'bug', color: '#d73a4a' },
    ],
  },
};