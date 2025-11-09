import { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownProps, DropdownItem } from '.';
import { Text } from '../../atoms/Text';
import { Settings, LogOut, Code } from 'lucide-react';
import styles from './styles.module.scss'; // CORREÇÃO: Importa o objeto de estilos

const meta: Meta<DropdownProps> = {
  title: 'molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    trigger: { control: 'text', description: 'O conteúdo do botão que aciona o menu.' },
    children: { control: false }, 
    align: { control: 'select', options: ['left', 'right'] },
    isOpen: { control: 'boolean' },
    ariaLabel: { control: 'text' },
  },
  args: {
    ariaLabel: 'Menu de opções do usuário',
    trigger: <Text asSpan size="medium">Opções</Text>,
    align: 'left',
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
          className={styles.divider} 
          style={{ margin: '4px 0', borderTop: '1px solid var(--color-border-default)' }} 
        />
        <DropdownItem onClick={() => alert('Sair')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* CORREÇÃO: variant="danger" agora é válido no TextProps */}
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
    align: 'right',
  },
  render: (args) => (
    <div style={{ padding: '50px', display: 'flex', justifyContent: 'flex-end' }}>
      <Dropdown {...args}>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
      </Dropdown>
    </div>
  ),
};