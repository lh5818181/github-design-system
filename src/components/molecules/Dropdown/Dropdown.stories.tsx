import { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownProps, DropdownItem } from '.';
import { Text } from '../../atoms/Text';
import { Settings, LogOut, Code } from 'lucide-react';


// Mock function para onClick (obrigatório para DropdownItemProps)
const mockOnClick = () => alert('Ação do Dropdown Clicada'); 

const meta: Meta<DropdownProps> = {
  title: 'molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    // CORREÇÃO: trigger é um React Element, deve ter o controle desativado.
    trigger: { control: false }, 
    children: { control: false }, 
    // CORREÇÃO: Usar 'position', que é a prop real do componente, em vez de 'align'.
    position: { control: 'select', options: ['left', 'right'], description: 'Posição do menu Dropdown.' },
    ariaLabel: { control: 'text' },
    // CORREÇÃO: Removido 'isOpen' que não existe na interface DropdownProps
  },
  args: {
    ariaLabel: 'Menu de opções do usuário',
    trigger: <Text asSpan size="medium">Opções</Text>,
    // CORREÇÃO: Usar 'position', que é a prop real do componente.
    position: 'left', 
  },
};

export default meta;

type Story = StoryObj<DropdownProps>;

const Template: Story = {
  render: (args) => (
    <div style={{ padding: '50px' }}>
      <Dropdown {...args}>
        <DropdownItem onClick={() => alert('Nova Ação')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Code size={16} /> <Text asSpan>Nova Ação</Text>
          </div>
        </DropdownItem>
        <DropdownItem onClick={() => alert('Configurações')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Settings size={16} /> <Text asSpan>Configurações</Text>
          </div>
        </DropdownItem>
        <div 
          // className={styles.divider} // Removido
          style={{ margin: '4px 0', borderTop: '1px solid var(--color-border-default)' }} 
        />
        <DropdownItem onClick={() => alert('Sair')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LogOut size={16} /> <Text asSpan variant="danger">Sair</Text>
          </div>
        </DropdownItem>
      </Dropdown>
    </div>
  ),
};

export const Default = { ...Template };

export const AlignedRight: Story = {
  ...Template,
  args: {
    ...Template.args,
    position: 'right', // CORREÇÃO: Usar 'position'
  },
  render: (args) => (
    <div style={{ padding: '50px', display: 'flex', justifyContent: 'flex-end' }}>
      <Dropdown {...args}>
        {/* CORREÇÃO: Adicionado 'onClick' que é obrigatório */}
        <DropdownItem onClick={mockOnClick}>Item 1</DropdownItem> 
        <DropdownItem onClick={mockOnClick}>Item 2</DropdownItem>
      </Dropdown>
    </div>
  ),
};