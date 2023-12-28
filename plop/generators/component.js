export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do component?',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Qual o tipo?',
        choices: () => [
          { name: 'Atom', value: 'atoms' },
          { name: 'Molecule', value: 'molecules' },
          { name: 'Organism', value: 'organisms' },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{camelCase type}}/{{pascalCase name}}/index.tsx',
        templateFile: 'partials/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{camelCase type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'partials/component/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{camelCase type}}/{{pascalCase name}}/styles.module.scss',
        templateFile: 'partials/component/styles.scss.hbs',
      },
    ],
  });
}
