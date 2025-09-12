import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/DeStaatVanDeWereld/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                about: resolve(__dirname, 'src/about.html')
            }
        }
    }
});