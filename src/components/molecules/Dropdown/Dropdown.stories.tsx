// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownProps, DropdownItem } from '.';
import { Text } from '../../atoms/Text';
import { Settings, LogOut, Code } from 'lucide-react';

const mockOnClick = () => console.log('Ação clicada'); 

const meta: Meta<DropdownProps> = {
  title: 'molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    trigger: { control: false }, 
    children: { control: false }, 
    position: { 
      control: 'select', 
      options: ['left', 'right'], 
      description: 'Posição do menu Dropdown.' 
    },
    ariaLabel: { control: 'text' },
  },
  args: {
    ariaLabel: 'Menu de opções',
    trigger: <Text size="medium">Opções</Text>,
    position: 'left', 
  },
};

export default meta;
type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: '50px', minHeight: '200px' }}>
      <Dropdown {...args}>
        <DropdownItem onClick={() => alert('Nova Ação')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Code size={16} /> <Text>Nova Ação</Text>
          </div>
        </DropdownItem>
        <DropdownItem onClick={() => alert('Configurações')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Settings size={16} /> <Text>Configurações</Text>
          </div>
        </DropdownItem>
        <div style={{ margin: '4px 0', borderTop: '1px solid var(--color-border-default)' }} />
        <DropdownItem onClick={() => alert('Sair')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LogOut size={16} /> <Text variant="danger">Sair</Text>
          </div>
        </DropdownItem>
      </Dropdown>
    </div>
  ),
};

export const AlignedRight: Story = {
  args: {
    position: 'right',
  },
  render: (args) => (
    <div style={{ padding: '50px', display: 'flex', justifyContent: 'flex-end', minHeight: '150px' }}>
      <Dropdown {...args}>
        <DropdownItem onClick={mockOnClick}>Item 1</DropdownItem> 
        <DropdownItem onClick={mockOnClick}>Item 2</DropdownItem>
      </Dropdown>
    </div>
  ),
};