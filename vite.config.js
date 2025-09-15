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
                index: resolve(__dirname, 'src/index.html'),
                about: resolve(__dirname, 'src/about.html'),
                dierenwelzijnenrecht: resolve(__dirname, 'src/dierenwelzijnenrecht.html'),
                klimaatenbiodiversiteit: resolve(__dirname, 'src/klimaatenbiodiversiteit.html'),
                volksgezondheid: resolve(__dirname, 'src/volksgezondheid.html'),
                cultuurenmaatschappij: resolve(__dirname, 'src/cultuurenmaatschappij.html')
            }
        }
    }
});
