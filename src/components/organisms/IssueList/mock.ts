import { IssueListProps, IssueFilter } from '.';
import { mockData as issueMock } from '../../molecules/IssueListItem/mock';
import { IssueListItemProps } from '../../molecules/IssueListItem';

const issuesMock: IssueListItemProps[] = [
    { ...issueMock, number: 10, title: 'Refatoração da Molécula ButtonIcon', status: 'pr' },
    { ...issueMock, number: 11, title: 'Adicionar testes de acessibilidade no Dropdown', status: 'open', commentsCount: 3 },
    { ...issueMock, number: 12, title: 'Bug: Avatar não carrega corretamente no Safari', status: 'open', labels: [{ label: 'bug', color: '#d73a4a', onClick: () => {} }] },
];

const mockFilters: IssueFilter[] = [
    {
        label: 'Author',
        items: [
            { id: 'me', label: 'Assigned to me', onClick: () => console.log('Filter: me') },
            { id: 'd3vlopes', label: 'd3vlopes', isSelected: true, onClick: () => console.log('Filter: d3vlopes') },
        ]
    },
    {
        label: 'Sort',
        items: [
            { id: 'newest', label: 'Newest', isSelected: true, onClick: () => console.log('Sort: newest') },
            { id: 'oldest', label: 'Oldest', onClick: () => console.log('Sort: oldest') },
        ]
    }
];

export const mockData: IssueListProps = {
    openCount: 20,
    closedCount: 154,
    issues: issuesMock,
    filters: mockFilters,
    newIssueHref: '#new-issue',
};