import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '.';

const mockOnPageChange = jest.fn();

describe('Molécula Pagination', () => {
  // Teste 1: Renderização na Primeira Página (Desabilitar Anterior)
  it('deve renderizar a primeira página corretamente e desabilitar o botão Anterior', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={mockOnPageChange}
      />
    );

    const prevButton = screen.getByLabelText('Página Anterior');
    expect(prevButton).toBeDisabled();
    
    // Espera o valor correto "page" (em vez de "true") para aria-current
    expect(screen.getByText('1')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  // Teste 2: Lógica de Clique e Chamada de Callback
  it('deve chamar onPageChange com a página correta ao clicar em um número', () => {
    mockOnPageChange.mockClear(); 

    render(
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={mockOnPageChange}
      />
    );

    // Clica na página 6, que é visível no DOM de saída (enquanto a 7 estava oculta por "...")
    const pageSixButton = screen.getByText('6');
    fireEvent.click(pageSixButton);

    // Verifica se a função de callback foi chamada com o valor 6
    expect(mockOnPageChange).toHaveBeenCalledWith(6);
  });
  
  // Teste 3: Navegação pelo botão "Próximo" (sem alterações)
  it('deve chamar onPageChange com a próxima página ao clicar no botão Próximo', () => {
    mockOnPageChange.mockClear(); 

    const currentPage = 5;
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={mockOnPageChange}
      />
    );

    const nextButton = screen.getByLabelText('Próxima Página');
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(currentPage + 1);
  });
});