# GitHub Design System 🐙

> Um sistema de design modular, acessível e testado, desenvolvido como desafio prático do ebook **"Design para Devs"**.

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://lh5818181.github.io/github-design-system/)
![CI/CD](https://github.com/lh5818181/github-design-system/actions/workflows/storybook.yml/badge.svg)
![Jest Tests](https://img.shields.io/badge/tests-100%25-brightgreen)

## 📖 Sobre o Projeto

[cite_start]Este projeto é a implementação de um Design System utilizando **React**, **TypeScript** e **Storybook**, seguindo a metodologia **Atomic Design** apresentada no **Capítulo 15** do ebook *"Design para Devs"*[cite: 599].

O objetivo foi transcender a implementação visual, garantindo um ecossistema robusto com **testes unitários**, **documentação automática** e **deploy contínuo**.

---

## 🚀 Stack Tecnológica

* [cite_start]**Core:** React 18, TypeScript, Vite [cite: 609]
* [cite_start]**Design:** Sass (SCSS Modules), Design Tokens [cite: 616, 626]
* [cite_start]**Documentação:** Storybook 8 (com Autodocs) [cite: 657]
* **Testes:** Jest, React Testing Library
* **CI/CD:** GitHub Actions (Deploy automático no GitHub Pages)

---

## 🏗️ Arquitetura (Atomic Design)

[cite_start]A estrutura de pastas reflete estritamente os níveis do Atomic Design sugeridos no material de referência[cite: 605]:

* [cite_start]🧱 **`src/components/atoms`**: Elementos indivisíveis (ex: `Button`, `Image`, `Text`)[cite: 713].
* [cite_start]🧬 **`src/components/molecules`**: Agrupamentos funcionais (ex: `Search`, `Dropdown`, `Pagination`)[cite: 730].
* [cite_start]🏗️ **`src/components/organisms`**: Seções complexas da interface (ex: `Header`, `IssueList`)[cite: 740].
* [cite_start]📄 **`src/templates`**: Estruturas de layout sem dados reais[cite: 750].
* [cite_start]📑 **`src/pages`**: Instâncias finais com injeção de dados[cite: 764].

[cite_start]Além disso, utilizamos **Design Tokens** para centralizar cores e tipografia em `src/styles/design-tokens`[cite: 634].

---

## 🛠️ Instalação e Uso

Para rodar o projeto localmente:

1.  **Instale as dependências:**
    ```bash
    npm install --legacy-peer-deps
    ```
    *(A flag `--legacy-peer-deps` é necessária devido à compatibilidade estrita entre Vite 7 e Storybook 8)*

2.  **Inicie o Storybook:**
    ```bash
    npm run storybook
    ```
    O ambiente de desenvolvimento abrirá em `http://localhost:6006`.

3.  **Rodar Testes Unitários:**
    Para validar a integridade dos componentes:
    ```bash
    npm test
    ```

---

## 🔄 Melhorias e Estabilização (V2)

Este repositório passou por uma refatoração técnica profunda em Dezembro de 2025 para garantir longevidade e qualidade profissional:

| Área | Melhoria Implementada |
| :--- | :--- |
| **Estabilidade** | Downgrade estratégico para **Storybook v8.6.14** para resolver conflitos críticos com o Vite. |
| **Qualidade** | Implementação de **100% de cobertura de testes** (Jest) para componentes core como `Dropdown`, `Tabs` e `Pagination`. |
| **Documentação** | Criação de uma `Introduction.mdx` moderna e migração para **Autodocs**, eliminando arquivos `.stories.mdx` legados. |
| **DevOps** | Configuração de Pipeline de CI/CD para build e deploy automático a cada push na `main`. |

---

## 🔗 Links Úteis

* [Acessar Storybook Online (GitHub Pages)](https://lh5818181.github.io/github-design-system/)
* [Repositório Original do Desafio](https://github.com/d3vlopes/github-design-system)

---

**Desenvolvido por Luis Henrique**
[cite_start]*Baseado nos ensinamentos de Leandro Lopes [cite: 601]*
