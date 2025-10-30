import { Meta, StoryObj } from '@storybook/react-vite';
import { Footer, FooterProps } from '.';

// Mock dos links de rodapé do GitHub
const mockLinks = [
  { label: 'Terms', href: '#terms' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Security', href: '#security' },
  { label: 'Status', href: '#status' },
  { label: 'Docs', href: '#docs' },
  { label: 'Contact GitHub', href: '#contact' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'API', href: '#api' },
  { label: 'Training', href: '#training' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
];

const meta: Meta<FooterProps> = {
  title: 'organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {
    links: mockLinks,
  },
  argTypes: {
    links: { control: 'text' }
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export default meta;

type Story = StoryObj<FooterProps>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#f6f8fa' }}>
        {/* Simula o preenchimento da página */}
        <div style={{ flexGrow: 1, padding: '20px' }}/>
        <Story />
      </div>
    ),
  ],
};