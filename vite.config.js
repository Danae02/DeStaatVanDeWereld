import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/DeStaatVanDeWereld/',
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                about: resolve(__dirname, 'src/about.html')
            }
        }
    }
});