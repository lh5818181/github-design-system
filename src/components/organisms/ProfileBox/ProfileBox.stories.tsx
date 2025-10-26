import { Meta, StoryObj } from '@storybook/react';
import { ProfileBox, ProfileBoxProps } from '.';
import { MapPin, Mail, Link as LinkIcon } from 'lucide-react';

const mockMetadata = [
  { icon: MapPin, value: 'Recife, PE, Brazil' },
  { icon: Mail, value: 'contato.leandrolopes@outlook.com', isLink: true, href: 'mailto:contato.leandrolopes@outlook.com' },
  { icon: LinkIcon, value: 'd3vlopes.dev', isLink: true, href: 'https://d3vlopes.dev' },
];

const meta: Meta<ProfileBoxProps> = {
  title: 'organisms/ProfileBox',
  component: ProfileBox,
  tags: ['autodocs'],
  args: {
    avatarSrc: 'https://avatars.githubusercontent.com/u/100?v=4', // Exemplo de Avatar
    username: 'd3vlopes',
    fullName: 'Leandro Lopes',
    bio: 'Desenvolvedor Full Stack, UX/UI Designer e autor. Apaixonado por código, criação e compartilhar conhecimento.',
    followersCount: 154,
    followingCount: 32,
    primaryAction: {
      label: 'Edit profile',
      onClick: () => alert('Abrir modal de edição')
    },
    metadata: mockMetadata,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px', border: '1px solid #d0d7de', borderRadius: '6px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<ProfileBoxProps>;

// 1. Box de Perfil Padrão
export const Default: Story = {};

// 2. Box com Ação de Seguir (Exemplo para perfil de terceiros)
export const ExternalProfile: Story = {
    args: {
        primaryAction: {
            label: 'Follow',
            onClick: () => alert('Seguindo usuário')
        },
        fullName: 'Jane Doe',
        username: 'janedoe',
        bio: 'Tech lead em Design Systems. Criadora de componentes elegantes e acessíveis.',
    }
};