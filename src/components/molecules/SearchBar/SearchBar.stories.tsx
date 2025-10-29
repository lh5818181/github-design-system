import { Meta, StoryObj } from '@storybook/react';
import { SearchBar, SearchBarProps } from '.';
import React, { useState } from 'react';

const meta: Meta<SearchBarProps> = {
  title: 'molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    isExpanded: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'input changed' }
  },
  args: {
    placeholder: 'Search or jump to...',
  }
};

export default meta;

type Story = StoryObj<SearchBarProps>;

// Componente Wrapper para simular o estado controlado e a expansão no focus
const ControlledSearchBar = (props: SearchBarProps) => {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    
    // Simula a expansão no focus, ignorando o prop isExpanded
    const effectiveIsExpanded = props.isExpanded || isFocused;

    return (
        <SearchBar 
            {...props}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            isExpanded={effectiveIsExpanded}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    );
}

// 1. Estado Colapsado Padrão
export const Collapsed: Story = {
    render: (args) => <ControlledSearchBar {...args} isExpanded={false} />,
    decorators: [
      (Story) => (
        <div style={{ padding: '20px', backgroundColor: '#f6f8fa' }}>
          <Story />
        </div>
      )
    ]
};

// 2. Estado Expandido (Simulando Focus ou Prop Externa)
export const Expanded: Story = {
    render: (args) => <ControlledSearchBar {...args} isExpanded={true} />,
    decorators: [
      (Story) => (
        <div style={{ padding: '20px', backgroundColor: '#f6f8fa' }}>
          <Story />
        </div>
      )
    ]
};

// 3. Com Conteúdo Digitado
export const WithContent: Story = {
    render: (args) => <ControlledSearchBar {...args} placeholder="Search repositories..." />,
    args: {
        isExpanded: true,
    },
    decorators: [
      (Story) => (
        <div style={{ padding: '20px', backgroundColor: '#f6f8fa' }}>
          <Story />
        </div>
      )
    ]
};