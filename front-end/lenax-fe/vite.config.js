import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const rootPath = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle: () => {
        const src = path.join(rootPath, 'dist', 'index.html');
        const dest = path.join(rootPath, 'dist', '404.html');
        try {
          fs.copyFileSync(src, dest);
          console.log('404.html created successfully');
        } catch (err) {
          console.error('Failed to create 404.html', err);
        }
      }
    }
  ],
  base: '/lenax-site/',
});
