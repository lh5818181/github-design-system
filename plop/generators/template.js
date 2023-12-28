export default function (plop) {
  plop.setGenerator('template', {
    description: 'Create a template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do template?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/index.tsx',
        templateFile: 'partials/template/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'partials/template/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/styles.module.scss',
        templateFile: 'partials/template/styles.scss.hbs',
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/mock.ts',
        templateFile: 'partials/template/mock.ts.hbs',
      },
    ],
  });
}
