import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs, TabItem } from '.';

const mockTabs: TabItem[] = [
  { id: 'code', label: 'Code' },
  { id: 'issues', label: 'Issues', count: 5 },
  { id: 'prs', label: 'Pull Requests' },
];

const mockOnTabChange = jest.fn();

describe('Molécula Tabs', () => {
  // Teste 1: Renderização e Estado Ativo Inicial
  it('deve renderizar todas as abas e marcar a inicial (issues) como ativa', () => {
    render(
      <Tabs 
        tabs={mockTabs} 
        onTabChange={mockOnTabChange} 
        initialTabId="issues" 
      />
    );

    // Verifica se a contagem (5) está presente
    expect(screen.getByText('5')).toBeInTheDocument();

    // CORREÇÃO: Usa Regex para encontrar a aba 'Issues' (ignorando o contador ' 5')
    const activeButton = screen.getByRole('tab', { name: /issues/i });
    expect(activeButton).toHaveAttribute('aria-selected', 'true');
    
    // Verifica se uma aba inativa está correta
    const inactiveButton = screen.getByRole('tab', { name: 'Code' });
    expect(inactiveButton).toHaveAttribute('aria-selected', 'false');
  });

  // Teste 2: Lógica de mudança de aba ao clicar
  it('deve chamar onTabChange com o ID correto ao clicar em outra aba', () => {
    mockOnTabChange.mockClear(); 

    render(
      <Tabs 
        tabs={mockTabs} 
        onTabChange={mockOnTabChange} 
        initialTabId="code" 
      />
    );

    // Clica na aba "Pull Requests"
    const prTab = screen.getByRole('tab', { name: 'Pull Requests' });
    fireEvent.click(prTab);

    // Verifica se o callback foi chamado com o ID da nova aba
    expect(mockOnTabChange).toHaveBeenCalledWith('prs');
  });
  
  // Teste 3: Acessibilidade - Verificação do role e aria-label
  it('deve ter a estrutura de acessibilidade correta (role=tablist e role=tab)', () => {
    render(
      <Tabs 
        tabs={mockTabs} 
        onTabChange={mockOnTabChange} 
        initialTabId="code" 
      />
    );

    // Verifica o contêiner principal de acessibilidade
    const tablist = screen.getByRole('tablist', { name: 'Navegação do Repositório' });
    expect(tablist).toBeInTheDocument();

    // Verifica se os botões têm o role 'tab'
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(mockTabs.length);
  });
});