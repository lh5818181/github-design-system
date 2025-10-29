import { Meta, StoryObj } from '@storybook/react';
import { IssueList, IssueListProps, IssueFilter } from '.';
import { mockData as issueMock } from '../../molecules/IssueListItem/mock';
import { IssueListItemProps } from '../../molecules/IssueListItem';

// Dados de Issues Mock
const issuesMock: IssueListItemProps[] = [
    { ...issueMock, number: 1, title: 'Issue 1: Layout responsivo do Header falhando em mobile', status: 'open', commentsCount: 5 },
    { ...issueMock, number: 2, title: 'Issue 2: Implementar testes de snapshot para todos os Átomos', status: 'open', labels: [{ label: 'testing', color: '#b60205', onClick: () => {} }], commentsCount: 2 },
    { ...issueMock, number: 3, title: 'PR 3: Finaliza o Organismo IssueList', status: 'pr', openedDateText: 'opened 1 day ago', commentsCount: 1, labels: [{ label: 'enhancement', color: '#a2eeef', onClick: () => {} }] },
    { ...issueMock, number: 4, title: 'Issue 4: Atualizar dependências do Storybook para v9', status: 'closed', openedDateText: 'closed 2 days ago', commentsCount: 0, labels: [{ label: 'dependencies', color: '#cfd3d7', onClick: () => {} }] },
];

// Dados de Filtros Mock
const mockFilters: IssueFilter[] = [
    {
        label: 'Author',
        items: [
            { id: 'me', label: 'Assigned to me', onClick: () => console.log('Filter: me') },
            { id: 'd3vlopes', label: 'd3vlopes', isSelected: true, onClick: () => console.log('Filter: d3vlopes') },
        ]
    },
    {
        label: 'Labels',
        items: [
            { id: 'bug', label: 'Bug', onClick: () => console.log('Filter: bug') },
            { id: 'docs', label: 'Documentation', onClick: () => console.log('Filter: docs') },
        ]
    },
    {
        label: 'Sort',
        items: [
            { id: 'newest', label: 'Newest', isSelected: true, onClick: () => console.log('Sort: newest') },
            { id: 'oldest', label: 'Oldest', onClick: () => console.log('Sort: oldest') },
        ]
    }
];

const meta: Meta<IssueListProps> = {
  title: 'organisms/IssueList',
  component: IssueList,
  tags: ['autodocs'],
  args: {
    openCount: 20,
    closedCount: 154,
    issues: issuesMock,
    filters: mockFilters,
    newIssueHref: '#new-issue',
  },
  argTypes: {
    issues: { control: 'text' },
    filters: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<IssueListProps>;

// 1. Lista Padrão de Issues Abertas
export const DefaultList: Story = {};

// 2. Lista Vazia
export const EmptyList: Story = {
    args: {
        issues: [],
        openCount: 0,
        closedCount: 154,
    },
};