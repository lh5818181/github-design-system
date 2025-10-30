import { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertProps } from '.';

const meta: Meta<AlertProps> = {
  title: 'atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['success', 'error', 'warning', 'info'] },
    isDismissible: { control: 'boolean' },
    onDismiss: { action: 'dismissed' },
  },
};

export default meta;

type Story = StoryObj<AlertProps>;

export const AllVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '600px' }}>
      <Alert variant="info">
        Esta é uma mensagem informativa sobre a nova atualização do GitHub.
      </Alert>
      <Alert variant="success" isDismissible onDismiss={args.onDismiss}>
        Configurações salvas com sucesso! O repositório foi atualizado.
      </Alert>
      <Alert variant="warning">
        Atenção: A branch principal está 5 commits atrás da sua branch atual.
      </Alert>
      <Alert variant="error" isDismissible onDismiss={args.onDismiss}>
        Erro ao carregar os dados. Verifique sua conexão ou tente novamente.
      </Alert>
    </div>
  ),
  args: {
    // onDismiss é usado no render para mostrar a funcionalidade
  },
};
