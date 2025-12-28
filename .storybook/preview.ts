import type { Preview } from '@storybook/react';
import '../src/styles/global.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        // Certifique-se de que os nomes aqui batem com o 'title' no seu MDX/Stories
        order: ['Introdução', 'Átomos', 'Moléculas', 'Organismos', '*'],
      },
    },
  },
};

export default preview;