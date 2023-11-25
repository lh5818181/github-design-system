import { HeaderProps } from '.';

import CodeIcon from './assets/code-icon.svg';
import IssueIcon from './assets/issue-icon.svg';
import PullRequestIcon from './assets/pull-request-icon.svg';
import DiscussionsIcon from './assets/discussions-icon.svg';
import PlayIcon from './assets/play-icon.svg';
import ProjectIcon from './assets/project-board-icon.svg';
import BookIcon from './assets/book-icon.svg';
import SecurityIcon from './assets/security-icon.svg';
import GraphIcon from './assets/graph-icon.svg';
import GearIcon from './assets/gear-icon.svg';

export const headerMock = {
  logoUrl:
    'https://res.cloudinary.com/dbnq26wqe/image/upload/v1700505897/others/Icon_wd4lxk.jpg',
  avatarUrl:
    'https://res.cloudinary.com/dbnq26wqe/image/upload/v1700505897/others/image_j8ej2v.jpg',
  breadcrumb: {
    previousPage: {
      text: 'Stripe',
      target: '#',
    },
    currentPage: {
      text: 'react-stripe-js',
      target: '#',
    },
  },
  menu: [
    {
      label: 'Code',
      count: 20,
      isBadge: true,
      icon: {
        src: CodeIcon,
        alt: 'Loren ipsum dolor',
      },
    },
    {
      label: 'Issues',
      count: 20,
      isBadge: true,
      icon: {
        src: IssueIcon,
        alt: 'Loren ipsum dolor',
      },
    },
    {
      label: 'Pull Request',
      count: 20,
      isBadge: true,
      icon: {
        src: PullRequestIcon,
        alt: 'Loren ipsum dolor',
      },
    },
    {
      label: 'Discussions',
      icon: {
        src: DiscussionsIcon,
        alt: 'Loren ipsum dolor',
      },
    },
    {
      label: 'Actions',
      icon: {
        src: PlayIcon,
        alt: 'Loren ipsum dolor',
      },
    },
    {
      label: 'Projects',
      icon: {
        src: ProjectIcon,
        alt: 'Loren ipsum dolor',
      },
    },
    {
      label: 'Wiki',
      icon: {
        src: BookIcon,
        alt: 'Loren ipsum dolor',
      },
    },
    {
      label: 'Security',
      icon: {
        src: SecurityIcon,
        alt: 'Loren ipsum dolor',
      },
    },
    {
      label: 'Insights',
      icon: {
        src: GraphIcon,
        alt: 'Loren ipsum dolor',
      },
    },
    {
      label: 'Settings',
      icon: {
        src: GearIcon,
        alt: 'Loren ipsum dolor',
      },
    },
  ],
} as HeaderProps;
