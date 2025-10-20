export default function (plop) {
  plop.setGenerator('componente', {
    description: 'Cria um novo componente (Átomo, Molécula, Organismo, etc.)',
    
    // Perguntas que serão feitas ao usuário
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do componente (ex: Button, SearchBar)?',
      },
      {
        type: 'list',
        name: 'category',
        message: 'Qual a categoria do componente?',
        choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
      },
    ],
    
    // Ações que serão executadas com as respostas
    actions: [
      // 1. Criar o arquivo principal do componente (index.tsx)
      {
        type: 'add',
        path: 'src/components/{{category}}/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/Component.tsx.hbs',
      },
      // 2. Criar o arquivo de estilos (styles.module.scss)
      {
        type: 'add',
        path: 'src/components/{{category}}/{{pascalCase name}}/styles.module.scss',
        templateFile: 'plop-templates/Styles.scss.hbs',
      },
      // 3. Criar o arquivo Storybook (.stories.tsx)
      {
        type: 'add',
        path: 'src/components/{{category}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/Story.tsx.hbs',
      },
      // 4. Criar o arquivo de mocks (mock.ts)
      {
        type: 'add',
        path: 'src/components/{{category}}/{{pascalCase name}}/mock.ts',
        templateFile: 'plop-templates/Mock.ts.hbs',
      },
    ],
  });
}