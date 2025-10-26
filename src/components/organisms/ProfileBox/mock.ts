
import { MapPin, Mail, Link as LinkIcon } from 'lucide-react';

const mockMetadata = [
  { icon: MapPin, value: 'Recife, PE, Brazil' },
  { icon: Mail, value: 'contato.leandrolopes@outlook.com', isLink: true, href: 'mailto:contato.leandrolopes@outlook.com' },
  { icon: LinkIcon, value: 'd3vlopes.dev', isLink: true, href: 'https://d3vlopes.dev' },
];

export const mockData = {
  defaultProps: {
    avatarSrc: 'https://avatars.githubusercontent.com/u/100?v=4',
    username: 'd3vlopes',
    fullName: 'Leandro Lopes',
    bio: 'Desenvolvedor Full Stack, UX/UI Designer e autor. Apaixonado por código, criação e compartilhar conhecimento.',
    followersCount: 154,
    followingCount: 32,
    primaryAction: {
      label: 'Edit profile',
      onClick: () => console.log('Edit profile clicked')
    },
    metadata: mockMetadata,
  }
};