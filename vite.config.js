import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const config = defineConfig({
    resolve: {
        alias: {
            '@': `${path.resolve(__dirname, 'src')}`,
        },
        dedupe: ['vue'],
    },
    
    build: {
        minify: true,
    },
    
    plugins: [
        /**
        * Vue 2 plugin for Vite
        * https://github.com/underfin/vite-plugin-vue2
        */
        Vue2(),
        
        /**
        * Bring <script setup> to Vue 2
        * https://github.com/antfu/unplugin-vue2-script-setup
        */
        ScriptSetup(),
        
        /**
        * Auto import APIs as they are used in <script setup>
        * API Examples: ref, reactive, router, etc
        * https://github.com/antfu/unplugin-auto-import
        */
        AutoImport({
            include: [
                /\.vue$/, /\.vue\?vue/, // .vue
            ],
            imports: [
                '@vue/composition-api',
                'vue-router',
                'pinia',
            ],
            dts: 'src/app/cache/auto-imports.d.ts',
        }),
        
        /**
        * Import components automatically as they are used
        * https://github.com/antfu/unplugin-vue-components
        */
        Components({
            extensions: ['vue'],
            deep: true,
            dirs: ['src'],
            directoryAsNamespace: false,
            dts: 'src/app/cache/components.d.js',
        }),
    ],
    
    /**
     * Configure how css is handled by Vite
     */
    css: {
        preprocessorOptions: {
            scss: {
                /**
                 * Share common variables among all processed files
                 * without having to explicit import them.
                 * https://vitejs.dev/config/#css-preprocessoroptions
                 */
                additionalData: `@import './src/app/styles/resources';`
            }
        }
    }
})

export default config
