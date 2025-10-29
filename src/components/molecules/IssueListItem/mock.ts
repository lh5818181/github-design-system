import { IssueListItemProps } from '.';

const mockLabels = [
  { label: 'bug', color: '#d73a4a', onClick: () => console.log('Filter by bug') },
  { label: 'documentation', color: '#0075ca', onClick: () => console.log('Filter by docs') },
];

export const mockData: IssueListItemProps = {
  title: 'Adicionar funcionalidade de Dark Mode no ThemeContext',
  number: 145,
  status: 'open',
  href: '#issue/145',
  labels: mockLabels,
  author: 'd3vlopes',
  authorAvatarSrc: 'https://avatars.githubusercontent.com/u/100?v=4',
  openedDateText: 'opened 5 days ago',
  commentsCount: 7,
};