import React from 'react';
// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsProps, TabItem } from '.';
import { action } from "@storybook/addon-actions";

const defaultTabs: TabItem[] = [
  { id: 'code', label: 'Code' },
  { id: 'issues', label: 'Issues', count: 12 },
  { id: 'pulls', label: 'Pull Requests', count: 3 },
  { id: 'actions', label: 'Actions' },
];

const TabsWithContent = (props: TabsProps) => {
  const [activeContent, setActiveContent] = React.useState(props.initialTabId || defaultTabs[0].id);

  const handleTabChange = (tabId: string) => {
    setActiveContent(tabId);
    action('onTabChange')(tabId);
  };

  const currentTab = props.tabs.find(t => t.id === activeContent);

  return (
    <div style={{ padding: '20px' }}>
      <Tabs {...props} onTabChange={handleTabChange} initialTabId={activeContent} />
      <div style={{ 
          marginTop: '24px', 
          padding: '24px', 
          border: '1px solid var(--color-border-default)', 
          borderRadius: '6px' 
      }}>
        <p style={{ color: 'gray', fontSize: '14px', marginBottom: '8px' }}>Conteúdo da aba:</p>
        <strong>{currentTab?.label || 'Nenhum'}</strong>
      </div>
    </div>
  );
};

const meta: Meta<TabsProps> = {
  title: 'molecules/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' },
    initialTabId: { control: 'text' },
  },
  args: {
    tabs: defaultTabs,
    initialTabId: 'code',
  },
  render: (args) => <TabsWithContent {...args} />,
};

export default meta;
type Story = StoryObj<TabsProps>;

export const Default: Story = {};

export const Simple: Story = {
  args: {
    tabs: [
      { id: 'overview', label: 'Visão Geral' },
      { id: 'settings', label: 'Configurações' },
    ],
  },
};