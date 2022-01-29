import path from "path"
import { defineConfig } from "vite"
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import Components from "unplugin-vue-components/vite"

const { createVuePlugin } = require('vite-plugin-vue2');

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
        Components({
            extensions: ['vue'],
            dirs: [
                'src/*'
            ],
        }),
    ],
})

export default config
