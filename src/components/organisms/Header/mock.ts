import { HeaderProps } from '.';

import CodeIcon from './assets/icons/code-icon.svg';
import IssueIcon from './assets/icons/issue-icon.svg';
import PullRequestIcon from './assets/icons/pull-request-icon.svg';
import DiscussionsIcon from './assets/icons/discussions-icon.svg';
import PlayIcon from './assets/icons/play-icon.svg';
import ProjectIcon from './assets/icons/project-board-icon.svg';
import BookIcon from './assets/icons/book-icon.svg';
import SecurityIcon from './assets/icons/security-icon.svg';
import GraphIcon from './assets/icons/graph-icon.svg';
import GearIcon from './assets/icons/gear-icon.svg';

export const headerMock = {
  logoUrl: 'https://res.cloudinary.com/dbnq26wqe/image/upload/v1700505897/others/Icon_wd4lxk.jpg',
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
