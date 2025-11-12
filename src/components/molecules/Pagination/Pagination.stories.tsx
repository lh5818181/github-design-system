import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination, PaginationProps } from '.';
import { action } from '@storybook/addon-actions';

const meta: Meta<PaginationProps> = {
  title: 'molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: { type: 'range', min: 1, max: 100, step: 1 } },
    totalPages: { control: { type: 'range', min: 10, max: 200, step: 10 } },
    siblingCount: { control: { type: 'range', min: 0, max: 2, step: 1 } },
    onPageChange: { action: 'onPageChange' },
  },
  args: {
    currentPage: 1,
    totalPages: 50,
    siblingCount: 1,
  },
  // O componente deve ser interativo no Storybook
  render: (args) => {
    // Componente wrapper para gerenciar o estado interno da página
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = React.useState(args.currentPage);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      setPage(args.currentPage);
    }, [args.currentPage]);

    const handlePageChange = (newPage: number) => {
      setPage(newPage);
      action('onPageChange')(newPage);
    };

    return <Pagination {...args} currentPage={page} onPageChange={handlePageChange} />;
  },
};

export default meta;

type Story = StoryObj<PaginationProps>;

// 1. Paginação Padrão (Início)
export const Start: Story = {
  args: {
    currentPage: 1,
    totalPages: 25,
  },
};

// 2. Paginação no Meio (Mostra pontinhos em ambos os lados)
export const Middle: Story = {
  args: {
    currentPage: 10,
    totalPages: 25,
  },
};

// 3. Paginação no Fim (Mostra pontinhos apenas à esquerda)
export const End: Story = {
  args: {
    currentPage: 25,
    totalPages: 25,
  },
};

// 4. Poucas Páginas (Não mostra pontinhos)
export const FewPages: Story = {
  args: {
    currentPage: 3,
    totalPages: 7,
  },
};