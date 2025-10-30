import { Meta, StoryObj } from '@storybook/react';
import { Pagination, PaginationProps } from '.';
import React, { useState } from 'react';

const meta: Meta<PaginationProps> = {
  title: 'molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: { type: 'range', min: 1, max: 50 } },
    totalPages: { control: { type: 'number', min: 1 } },
    onPageChange: { action: 'page changed' },
  },
  args: {
    currentPage: 1,
    totalPages: 15,
  },
};

export default meta;

type Story = StoryObj<PaginationProps>;

// Componente Wrapper para simular o estado controlado
const ControlledPagination = (props: PaginationProps) => {
    const [page, setPage] = useState(props.currentPage);
    
    // Atualiza o estado interno quando o prop do Storybook muda
    React.useEffect(() => {
        setPage(props.currentPage);
    }, [props.currentPage]);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        props.onPageChange(newPage);
    };

    return (
        <Pagination 
            {...props}
            currentPage={page}
            onPageChange={handlePageChange}
        />
    );
};


// 1. Início da Lista (Página 1)
export const Start: Story = {
    render: (args) => <ControlledPagination {...args} />,
    args: {
        currentPage: 1,
        totalPages: 15,
    }
};

// 2. Meio da Lista (Exibindo Elipses)
export const Middle: Story = {
    render: (args) => <ControlledPagination {...args} />,
    args: {
        currentPage: 8,
        totalPages: 20,
    }
};

// 3. Fim da Lista (Página 20)
export const End: Story = {
    render: (args) => <ControlledPagination {...args} />,
    args: {
        currentPage: 20,
        totalPages: 20,
    }
};

// 4. Lista Curta (Sem Elipses)
export const ShortList: Story = {
    render: (args) => <ControlledPagination {...args} />,
    args: {
        currentPage: 3,
        totalPages: 5,
    }
};