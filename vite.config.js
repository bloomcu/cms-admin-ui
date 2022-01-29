import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// const { createVuePlugin } = require('vite-plugin-vue2');

const config = defineConfig({
    resolve: {
        alias: {
            "@": `${path.resolve(__dirname, "src")}`,
        },
    },
    
    build: {
        minify: true,
    },
    
    plugins: [
        createVuePlugin(),
        ScriptSetup(),
        AutoImport({
            include: [
                /\.vue$/, /\.vue\?vue/,
            ],
            imports: [
                '@vue/composition-api',
                'vue-router',
            ],
            dts: 'src/auto-imports.d.ts',
        }),
        Components({
            extensions: ['vue'],
            dirs: [
                'src/*'
            ],
            dts: 'src/components.d.js',
        }),
    ],
})

export default config
