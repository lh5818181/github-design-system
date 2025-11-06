# GitHub Design System

Este projeto é a implementação de um Design System utilizando **React** e **Storybook**, seguindo a metodologia e os conceitos apresentados no **Capítulo 15 do ebook "Design para Devs"**.

## Estrutura do Projeto

O projeto segue a arquitetura de Atomic Design, conforme sugerido no ebook:

-   `src/components/atoms`: Componentes básicos e indivisíveis (ex: Botão, Ícone).
-   `src/components/molecules`: Agrupamento de átomos (ex: Campo de Busca).
-   `src/components/organisms`: Agrupamento de moléculas e átomos (ex: Cabeçalho, Lista de Issues).
-   `src/templates`: Estruturas de página com organismos e moléculas.
-   `src/pages`: Páginas completas que utilizam os templates.
-   `.storybook`: Arquivos de configuração do Storybook.
-   `src/introduction.mdx`: Arquivo de introdução corrigido e configurado para ser a página inicial do Storybook.

## Como Iniciar

Para rodar o projeto localmente, siga os passos abaixo:

1.  **Instalar Dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

2.  **Iniciar o Storybook:**
    ```bash
    npm run storybook
    # ou
    yarn storybook
    ```

O Storybook será iniciado em `http://localhost:6006` e a página de introdução (`introduction.mdx`) será a primeira a ser exibida.

## Correções Aplicadas

O projeto original apresentava problemas de inicialização e visualização do arquivo de introdução. As seguintes correções foram aplicadas para garantir a funcionalidade:

| Problema | Causa | Solução |
| :--- | :--- | :--- |
| **`introduction.mdx` não visível** | O arquivo não existia no projeto original clonado. | O arquivo `src/introduction.mdx` foi criado com o conteúdo de introdução e o arquivo de configuração do Storybook (`.storybook/main.ts`) foi ajustado para incluir o caminho do arquivo na lista de *stories*. |
| **Falta de Componentes** | O repositório clonado não continha todos os componentes do desafio do Capítulo 15. | O projeto foi recriado a partir do repositório original, e o `introduction.mdx` foi adicionado e configurado corretamente. |

## Próximos Passos

Após a instalação, você pode continuar o desenvolvimento do Design System, criando novos componentes e documentando-os no Storybook.

**Autor:** Manus AI (Baseado no ebook "Design para Devs")
