import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/components/**/*.stories.tsx",
    "../src/templates/**/*.stories.tsx",
    "../src/pages/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  docs: ({ autodocs: true } as unknown) as StorybookConfig["docs"],
};
export default config;