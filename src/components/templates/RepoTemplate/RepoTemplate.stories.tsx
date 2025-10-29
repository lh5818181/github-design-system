import { Meta, StoryObj } from '@storybook/react';
import { RepoTemplate, RepoTemplateProps } from '.';
import { mockData as issueListMock } from '../../organisms/IssueList/mock';
import { IssueList } from '../../organisms/IssueList';
import { Code, AlertTriangle, GitPullRequest } from 'lucide-react';

// Mock para o RepoHeader
const mockRepoHeader = {
  repoName: 'github-design-system',
  ownerName: 'd3vlopes',
  isPrivate: false,
  description: 'Um Design System construído com React e Storybook.',
  starsCount: 154,
  forksCount: 32,
  tabs: [
    { id: 'code', label: 'Code', icon: Code, href: '#code' },
    { id: 'issues', label: 'Issues', icon: AlertTriangle, href: '#issues', isActive: true, count: 20 },
    { id: 'pulls', label: 'Pull requests', icon: GitPullRequest, href: '#pulls', count: 12 },
  ],
};


const meta: Meta<RepoTemplateProps> = {
  title: 'templates/RepoTemplate',
  component: RepoTemplate,
  tags: ['autodocs'],
  args: {
    repoHeaderData: mockRepoHeader,
    // O children será renderizado no Story
  },
  parameters: {
    layout: 'fullscreen', 
  }
};

export default meta;

type Story = StoryObj<RepoTemplateProps>;

// Exemplo: Página de Issues do Repositório
export const IssuesPage: Story = {
    args: {
        repoHeaderData: {
            ...mockRepoHeader,
            tabs: mockRepoHeader.tabs.map(tab => ({ 
                ...tab, 
                isActive: tab.id === 'issues' 
            }))
        },
        children: (
            // Renderiza o Organismo IssueList dentro do Template
            <IssueList {...issueListMock} />
        )
    }
};

// Exemplo: Página de Código (simulando a área do README)
export const CodePage: Story = {
    args: {
        repoHeaderData: {
            ...mockRepoHeader,
            tabs: mockRepoHeader.tabs.map(tab => ({ 
                ...tab, 
                isActive: tab.id === 'code' 
            }))
        },
        children: (
            <div style={{ padding: '32px', border: '1px solid #d0d7de', borderRadius: '6px', backgroundColor: '#ffffff' }}>
                <h1>README.md</h1>
                <p>Aqui seria a visualização do código e do README do seu projeto. Todo o layout de página já está definido!</p>
            </div>
        )
    }
};