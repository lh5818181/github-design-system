export default function (plop) {
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome da página?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}Page/index.tsx',
        templateFile: 'partials/page/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}Page/{{pascalCase name}}Page.stories.tsx',
        templateFile: 'partials/page/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}Page/mock.ts',
        templateFile: 'partials/page/mock.ts.hbs',
      },
    ],
  });
}
