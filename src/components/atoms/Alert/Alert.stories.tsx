import { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertProps } from '.';

const meta: Meta<AlertProps> = {
  title: 'atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['success', 'error', 'warning', 'info'] },
    children: { control: 'text' },
    isDismissible: { control: 'boolean' },
    onDismiss: { action: 'onDismiss event', description: 'Callback chamado ao clicar no botão de fechar.' },
  },
  args: {
    children: 'Este é um alerta padrão de informação sobre o sistema.',
    variant: 'info',
  },
};

export default meta;

type Story = StoryObj<AlertProps>;

// 1. Alerta de Sucesso
export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Seu repositório foi criado com sucesso!',
  },
};

// 2. Alerta de Erro
export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Falha ao conectar-se ao servidor. Tente novamente.',
  },
};

// 3. Alerta de Aviso com Botão de Fechar
export const WarningDismissible: Story = {
  args: {
    variant: 'warning',
    children: 'Atenção: A branch principal será renomeada em 30 dias.',
    isDismissible: true,
  },
};

// 4. Alerta Longo com Informação
export const InfoLong: Story = {
  args: {
    variant: 'info',
    children: (
      <>
        <p>
          O Design System está sendo atualizado para a versão 2.0. Novas propriedades e tokens de cor
          foram adicionados, o que pode exigir uma pequena revisão em seus estilos customizados.
        </p>
        <p>
          <a href="/?path=/docs/introduction-overview--docs">Clique aqui</a> para ver o guia de migração.
        </p>
      </>
    ),
  },
};