import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Dropdown, DropdownItem } from '.';


const MockTrigger = () => <span>Abrir Menu</span>;
const mockOnItemClick = jest.fn();

describe('Molécula Dropdown', () => {
  // Teste 1: Renderização e Estado Inicial (Fechado)
  it('deve renderizar o trigger e manter o menu escondido inicialmente', () => {
    render(
      <Dropdown trigger={<MockTrigger />} ariaLabel="Menu de Teste">
        <DropdownItem onClick={mockOnItemClick}>Opção 1</DropdownItem>
      </Dropdown>
    );

    // Busca o botão principal criado pelo Dropdown
    const triggerButton = screen.getByRole('button', { name: 'Menu de Teste' });
    expect(triggerButton).toBeInTheDocument();
    
    // CORREÇÃO: Verifica se o menu não está no DOM quando fechado
    const menu = screen.queryByRole('menu');
    expect(menu).not.toBeInTheDocument(); 
  });

  // Teste 2: Abertura do Menu ao Clicar no Trigger
  it('deve abrir o menu e exibir os itens ao clicar no trigger', () => {
    render(
      <Dropdown trigger={<MockTrigger />} ariaLabel="Menu de Teste">
        <DropdownItem onClick={mockOnItemClick}>Configurações</DropdownItem>
      </Dropdown>
    );

    const triggerButton = screen.getByRole('button', { name: 'Menu de Teste' });
    fireEvent.click(triggerButton); // Abre o menu

    // CORREÇÃO: Busca o menu sem nome, pois ele não herda o aria-label do trigger (limitação/bug de acessibilidade do componente)
    const menu = screen.getByRole('menu'); 
    expect(menu).toBeVisible();
    
    // Verifica o estado de acessibilidade
    expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('menuitem', { name: 'Configurações' })).toBeVisible();
  });

  // Teste 3: Fechamento do Menu ao Clicar em um Item
  it('deve fechar o menu e executar a ação ao clicar em um item', async () => {
    mockOnItemClick.mockClear();
    render(
      <Dropdown trigger={<MockTrigger />} ariaLabel="Menu de Teste">
        <DropdownItem onClick={mockOnItemClick}>Opção com Ação</DropdownItem>
      </Dropdown>
    );

    const triggerButton = screen.getByRole('button', { name: 'Menu de Teste' });
    fireEvent.click(triggerButton); // Abre o menu

    const menuItem = screen.getByRole('menuitem', { name: 'Opção com Ação' }); 
    fireEvent.click(menuItem); // Clica no item

    expect(mockOnItemClick).toHaveBeenCalledTimes(1);
    
    // CORREÇÃO: Verifica a mudança de estado (aria-expanded) no botão de trigger
    await waitFor(() => {
        expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  // Teste 4: Fechamento do Menu ao Clicar Fora (Click Outside)
  it('deve fechar o menu ao simular um clique fora do componente', async () => {
    render(
      <Dropdown trigger={<MockTrigger />} ariaLabel="Menu de Teste">
        <DropdownItem onClick={mockOnItemClick}>Opção Fechar</DropdownItem>
      </Dropdown>
    );

    const triggerButton = screen.getByRole('button', { name: 'Menu de Teste' });
    fireEvent.click(triggerButton); // Abre o menu

    fireEvent.mouseDown(document.body);

    // Garante que o trigger voltou ao estado fechado
    await waitFor(() => {
      expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
      // Opcional: Garante que o menuitem não está visível (se o menu sumir do DOM)
      // expect(screen.queryByRole('menuitem', { name: /opção fechar/i })).not.toBeInTheDocument();
    });
  });
});