import { DropdownItem } from '.';

const mockItems: DropdownItem[] = [
  { id: '1', label: 'Open Issues', isSelected: true, onClick: () => console.log('Open Issues selected') },
  { id: '2', label: 'Your Issues', isSelected: false, onClick: () => console.log('Your Issues selected') },
  { id: '3', label: 'Mentioned', isSelected: false, onClick: () => console.log('Mentioned selected') },
];

export const mockData = {
  defaultProps: {
    label: 'Filtros',
    items: mockItems,
    alignRight: false,
  }
};