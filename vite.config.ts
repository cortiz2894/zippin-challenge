import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      react: 'react', // Asegúrate de que este alias coincida con la versión que has importado en tus archivos.
    },
  },
});