// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from '@storybook/react';
import { Icon, IconProps } from '.';
import { Star, Code, AlertCircle, ArrowRight } from 'lucide-react';

const meta: Meta<IconProps> = {
  title: 'atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large', 'xlarge'] },
  },
  args: {
    ariaLabel: 'Estrela',
  },
};

export default meta;

type Story = StoryObj<IconProps>;

// 1. Ícone Padrão (Tamanho Médio)
export const Default: Story = {
  args: {
    icon: Star,
  },
};

// 2. Todos os Tamanhos e Variações de Cor
export const Variations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h4>Tamanhos</h4>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
        <Icon {...args} icon={Code} size="small" ariaLabel="Ícone Small" />
        <Icon {...args} icon={Code} size="medium" ariaLabel="Ícone Medium" />
        <Icon {...args} icon={Code} size="large" ariaLabel="Ícone Large" />
        <Icon {...args} icon={Code} size="xlarge" ariaLabel="Ícone XLarge" />
      </div>

      <h4>Cores</h4>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Icon
          {...args}
          icon={AlertCircle}
          size="large"
          color="#cf222e"
          ariaLabel="Ícone Alerta Vermelho"
        />
        <Icon {...args} icon={Star} size="large" color="#0969da" ariaLabel="Ícone Estrela Azul" />
      </div>
    </div>
  ),
};

// 3. Ícone Clicável (Exemplo de herança de props)
export const Clickable: Story = {
  args: {
    icon: ArrowRight,
    ariaLabel: 'Próxima Etapa',
    size: 'large',
    onClick: () => alert('Ícone Clicado!'),
    style: { cursor: 'pointer' },
  },
};
