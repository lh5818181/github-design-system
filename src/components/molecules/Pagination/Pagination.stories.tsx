import { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination, PaginationProps } from '.';
import { mockData } from './mock';

// Define a metainformação da história
const meta: Meta<PaginationProps> = {
  title: 'molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    // Valores padrão de props para o Storybook
    children: 'Conteúdo do Pagination',
  },
};

export default meta;

type Story = StoryObj<PaginationProps>;

// Define a primeira história
export const Default: Story = {
  args: {
    // Utilize mockData se necessário:
    // ...mockData.defaultProps,
  },
};