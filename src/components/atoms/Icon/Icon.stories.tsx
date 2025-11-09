import { Meta, StoryObj } from '@storybook/react';
import { Icon, IconProps } from '.';
import { AlertCircle, CheckCircle, Bell, Settings } from 'lucide-react';

const meta: Meta<IconProps> = {
  title: 'atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: { 
      control: false, 
      description: 'O componente de ícone real de uma biblioteca (ex: Lucide).' 
    },
    size: { control: 'select', options: ['small', 'medium', 'large', 'xlarge'] },
    color: { control: 'select', options: ['default', 'muted', 'success', 'danger', 'accent'] },
    ariaLabel: { control: 'text', description: 'Rótulo de acessibilidade. Requerido se o ícone for significativo.' }
  },
  args: {
    icon: Bell,
    ariaLabel: 'Notificações',
    size: 'medium',
    color: 'default'
  }
};

export default meta;

type Story = StoryObj<IconProps>;

export const Default: Story = {};

export const StatusIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon {...args} icon={CheckCircle} color="success" size="large" ariaLabel="Sucesso" />
      <Icon {...args} icon={AlertCircle} color="danger" size="xlarge" ariaLabel="Erro Grave" />
      <Icon {...args} icon={Settings} color="accent" size="small" ariaLabel="Configurações" />
    </div>
  ),
  args: {
    ariaLabel: undefined,
  }
};