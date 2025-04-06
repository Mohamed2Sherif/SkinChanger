import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
    server: {
        port: 3001,       // Change port from 3000 to 4000
        open: false,       // Automatically open the browser
    },
    plugins: [react()],
    build: {
        emptyOutDir:false,
        outDir: path.resolve(__dirname, '../build'), // Change build output directory
    },
    css: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
    base: './', // Make sure the base path for assets is relative (useful for Electron apps)
});