import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsProps, TabItem } from '.';
import { action } from '@storybook/addon-actions';

const defaultTabs: TabItem[] = [
  { id: 'code', label: 'Code' },
  { id: 'issues', label: 'Issues', count: 12 },
  { id: 'pulls', label: 'Pull Requests', count: 3 },
  { id: 'actions', label: 'Actions' },
  { id: 'projects', label: 'Projects' },
];

// Componente Wrapper para simular o painel de conteúdo
const TabsWithContent = (props: TabsProps) => {
  // Gerencia o estado da aba ativa no componente de demonstração
  const [activeContent, setActiveContent] = React.useState(props.initialTabId || defaultTabs[0].id);

  const handleTabChange = (tabId: string) => {
    setActiveContent(tabId);
    action('onTabChange')(tabId); // Registra a ação no painel Actions
  };

  const currentTab = props.tabs.find(t => t.id === activeContent);

  return (
    <>
      {/* O componente Tabs renderiza apenas a barra de navegação */}
      <Tabs {...props} onTabChange={handleTabChange} initialTabId={activeContent} />
      
      {/* Simulação do painel de conteúdo */}
      <div 
        style={{ 
          marginTop: '24px', 
          padding: '24px', 
          border: '1px solid var(--color-border-default)', 
          borderRadius: '6px' 
        }}
      >
        <p>Conteúdo da aba atualmente ativa:</p>
        <strong>{currentTab?.label || 'Nenhum'}</strong>.
      </div>
    </>
  );
};


const meta: Meta<TabsProps> = {
  title: 'molecules/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' },
    initialTabId: { control: 'text' },
    onTabChange: { action: 'onTabChange' },
  },
  args: {
    tabs: defaultTabs,
    initialTabId: 'code',
  },
  // Usa o componente wrapper para mostrar a funcionalidade completa
  render: (args) => <TabsWithContent {...args} />,
};

export default meta;

type Story = StoryObj<TabsProps>;

// 1. Aba Padrão
export const Default: Story = {};

// 2. Aba Sem Contador
export const Simple: Story = {
  args: {
    tabs: [
      { id: 'overview', label: 'Visão Geral' },
      { id: 'settings', label: 'Configurações' },
      { id: 'security', label: 'Segurança' },
    ],
  },
};