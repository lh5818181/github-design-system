// Este é o ponto de entrada principal (Export Hub) do Design System.

// ---------------------------
// 1. ÁTOMOS
// ---------------------------

// Componentes de base (Atoms)
export * from './components/atoms/Button';
export * from './components/atoms/Icon';
export * from './components/atoms/Text';
// Adicione qualquer outro Átomo que você tenha criado aqui.

// ---------------------------
// 2. MOLÉCULAS
// ---------------------------

// Componentes compostos (Molecules)
export * from './components/molecules/Tabs';
export * from './components/molecules/Dropdown';
export * from './components/molecules/Pagination';
// Adicione qualquer outra Molécula aqui.

// ---------------------------
// 3. ORGANISMOS (Exemplo: se você criou o IssueList)
// ---------------------------

// export * from './components/organisms/IssueList'; 
// Adicione qualquer Organismo que você tenha criado aqui.


// ---------------------------
// 4. TIPOS & INTERFACES (Opcional)
// ---------------------------

// Exporte tipos e interfaces importantes que o consumidor da biblioteca deve usar, 
// especialmente se eles não foram exportados junto com o componente principal.

// Exemplo de tipos do Dropdown (já corrigido na exportação do index.tsx)
// export type { DropdownProps, DropdownItemProps } from './components/molecules/Dropdown';
// Exemplo de tipos do Tabs
// export type { TabItem, TabsProps } from './components/molecules/Tabs';