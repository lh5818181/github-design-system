import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, 
    }),
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), 
      name: 'GithubDesignSystem',
      formats: ['es', 'cjs'], 
      fileName: (format) => `github-design-system.${format}.js`,
    },
    rollupOptions: {
      // Exclui dependências externas do pacote final
      external: ['react', 'react-dom', 'lucide-react'], 
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'lucideReact',
        },
      },
    },
  },
});