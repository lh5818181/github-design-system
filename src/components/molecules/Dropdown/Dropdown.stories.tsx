import { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown, DropdownProps, DropdownItem } from '.';
import React, { useState } from 'react';

// Dados simulados
const initialItems: DropdownItem[] = [
  { id: '1', label: 'Open Issues', isSelected: true, onClick: () => {} },
  { id: '2', label: 'Your Issues', isSelected: false, onClick: () => {} },
  { id: '3', label: 'Mentioned', isSelected: false, onClick: () => {} },
  { id: '4', label: 'Closed Issues', isSelected: false, onClick: () => {} },
];

const meta: Meta<DropdownProps> = {
  title: 'molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    items: { control: 'text' },
    alignRight: { control: 'boolean' }
  },
  args: {
    label: 'Filtros',
    items: initialItems,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '150px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<DropdownProps>;

// Componente Wrapper para simular a seleção de estado
const ControlledDropdown = ({ label, items, alignRight }: DropdownProps) => {
    const [currentItems, setCurrentItems] = useState(items);

    const handleItemClick = (id: string) => {
        setCurrentItems(currentItems.map(item => ({
            ...item,
            // Simulação de seleção única (como um filtro de status)
            isSelected: item.id === id,
        })));
    };
    
    // Atualiza os cliques dos mocks para usar o handler local
    const clickableItems = currentItems.map(item => ({
        ...item,
        onClick: handleItemClick
    }));

    // Encontra o item selecionado para atualizar o label
    const selectedItem = currentItems.find(item => item.isSelected);
    const effectiveLabel = selectedItem ? selectedItem.label : label;

    return (
        <Dropdown 
            label={effectiveLabel} 
            items={clickableItems} 
            alignRight={alignRight} 
        />
    );
};


// 1. Dropdown Padrão (Filtro de Status)
export const DefaultFilter: Story = {
    render: (args) => <ControlledDropdown {...args} />,
    args: {
        label: 'Status',
        items: initialItems,
    }
};

// 2. Dropdown Alinhado à Direita (Menu de Usuário)
export const AlignedRight: Story = {
    render: (args) => <ControlledDropdown {...args} />,
    args: {
        label: 'd3vlopes',
        alignRight: true,
        items: [
             { id: '1', label: 'Your profile', isSelected: false, onClick: () => {} },
             { id: '2', label: 'Your repositories', isSelected: false, onClick: () => {} },
             { id: '3', label: 'Settings', isSelected: false, onClick: () => {} },
             { id: '4', label: 'Sign out', isSelected: false, onClick: () => {} },
        ]
    },
};