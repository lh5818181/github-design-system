import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';
import React, { useState } from 'react';

const meta: Meta<CheckboxProps> = {
  title: 'atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    styleType: { control: 'select', options: ['checkbox', 'toggle'] },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    onChange: { action: 'changed' },
    id: { control: false },
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

// Componente Wrapper para simular o estado controlado do React
const ControlledCheckbox = (props: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(props.checked || false);
  return <Checkbox {...props} checked={isChecked} onChange={() => setIsChecked(!isChecked)} />;
};

// 1. Checkbox Padrão (Controlado)
export const StandardCheckbox: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    label: 'Aceito os termos de serviço do repositório',
    checked: true,
    styleType: 'checkbox',
  },
};

// 2. Toggle (Switch)
export const ToggleSwitch: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    label: 'Habilitar notificação por email',
    checked: false,
    styleType: 'toggle',
  },
};

// 3. Estado Desabilitado
export const DisabledState: Story = {
  args: {
    label: 'Funcionalidade temporariamente indisponível',
    checked: true,
    disabled: true,
    styleType: 'toggle',
  },
};
