import { HomeTemplateProps } from '.';

export const homeTemplateMock: HomeTemplateProps = {
  header: {
    avatarUrl: 'https://placehold.co/32x32',
    logoUrl: 'https://placehold.co/32x32',
    breadcrumb: {
      previousPage: {
        text: 'Previous page',
        target: '#',
      },
      currentPage: {
        text: 'Current page',
        target: '#',
      },
    },
    menu: [
      {
        icon: {
          src: 'https://placehold.co/16x16',
          alt: 'Loren ipsum dolor',
        },
        label: 'Active Link',
        isBadge: true,
        count: 20,
      },
      {
        icon: {
          src: 'https://placehold.co/16x16',
          alt: 'Loren ipsum dolor',
        },
        label: 'Inactive Link',
      },
    ],
  },
};