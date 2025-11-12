import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { IssueList, IssueListProps, IssueListItemProps } from '.';
import { action } from '@storybook/addon-actions';

// Dados MOCK para preencher a lista
const mockIssues: IssueListItemProps[] = [
  { title: 'Melhorar o contraste do modo escuro no átomo Button', number: 149, type: 'issue', status: 'open', metadata: 'aberto por d3vlopes há 1h', href: '#149', labels: [{ name: 'bug', color: '#d73a4a' }, { name: 'dark-mode', color: '#5319e7' }] },
  { title: 'feat: Adiciona o componente IssueList e Paginação', number: 148, type: 'pull-request', status: 'closed', metadata: 'fundido por ci-bot há 2h', href: '#148', labels: [{ name: 'feature', color: '#a2eeef' }] },
  { title: 'Atualizar documentação de tokens de cor', number: 147, type: 'issue', status: 'open', metadata: 'aberto por docs-team há 5h', href: '#147', labels: [{ name: 'documentation', color: '#0075ca' }] },
  { title: 'Erro de CORS ao buscar dados da API de produção', number: 146, type: 'issue', status: 'open', metadata: 'aberto por qa-team há 1d', href: '#146', labels: [{ name: 'bug', color: '#d73a4a' }, { name: 'p1', color: '#f9d0c4' }] },
  { title: 'docs: Criação do guia de contribuição', number: 145, type: 'pull-request', status: 'open', metadata: 'aberto por d3vlopes há 2d', href: '#145', labels: [{ name: 'docs', color: '#0075ca' }] },
];

const meta: Meta<IssueListProps> = {
  title: 'organisms/IssueList',
  component: IssueList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    totalPages: { control: 'number' },
    currentPage: { control: 'number' },
    onPageChange: { action: 'onPageChange' },
  },
  args: {
    items: mockIssues,
    totalPages: 25,
    currentPage: 1,
  },
  // Wrapper para gerenciar o estado da paginação interativamente
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = React.useState(args.currentPage);

    // Garante que o estado seja atualizado se o controle do Storybook for alterado
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        setPage(args.currentPage);
    }, [args.currentPage]);

    const handlePageChange = (newPage: number) => {
      setPage(newPage);
      action('onPageChange')(newPage); // Registra a ação no painel Actions
    };

    return (
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        <IssueList {...args} currentPage={page} onPageChange={handlePageChange} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<IssueListProps>;

// 1. Lista de Issues Padrão (Página 1)
export const DefaultList: Story = {};

// 2. Lista na Página do Meio (demonstra pontinhos na paginação)
export const MiddlePage: Story = {
  args: {
    currentPage: 10,
    totalPages: 50,
  },
};