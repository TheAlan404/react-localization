import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigpaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
    plugins: [
        react(),
        tsconfigpaths(),
    ],
    base: '/react-localization/',
    resolve: {
        alias: {
            '@alan404/react-localization': path.resolve(__dirname, '../packages/react-localization/src'),
        },
    },
});
