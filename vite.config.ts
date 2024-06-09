import path from 'path';
// import react from '@vitejs/plugin-react-swc';
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
export default defineConfig({
    // plugins: [react({ tsDecorators: true })],
    plugins: [
        react({
            babel: {
                plugins: [
                    ['@babel/plugin-proposal-decorators', { legacy: true }],
                    ['@babel/plugin-proposal-class-properties', { loose: true }],
                    [
                        '@babel/plugin-transform-runtime',
                        {
                            helpers: true,
                            regenerator: true,
                        },
                    ],
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 3000,
    },
});
