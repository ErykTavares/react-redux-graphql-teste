import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		eslintPlugin({
			eslintOptions: {
				cache: false,
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			'@components': `${path.resolve(__dirname, './src/components/')}`,
			'@screens': `${path.resolve(__dirname, './src/screens/')}`,
			'@shared': `${path.resolve(__dirname, './src/shared/')}`,
			'@styles': `${path.resolve(__dirname, './src/styles/')}`,
		},
	},
	envDir: './',
});
