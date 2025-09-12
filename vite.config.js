import { defineConfig } from 'vite';

export default defineConfig({
    base: '/DeStaatVanDeWereld/',
    root: 'src',
    build: {
        outDir: '../dist',

        emptyOutDir: true
    }
});