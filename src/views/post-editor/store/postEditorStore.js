import { defineStore, acceptHMRUpdate } from 'pinia'

export const postEditorStore = defineStore('postEditorStore', {
    state: () => ({
        show: {
            overview: true,
            blockEditor: false,
            files: false,
            blocks: true,
        },
    }),
    
    actions: {
        showDefault() {
            this.show = {
                overview: true,
                blockEditor: false,
                files: false,
                blocks: true,
            }
        },

        showBlockEditor() {
            this.show = {
                overview: false,
                blockEditor: true,
                files: false,
                blocks: false,
            }
        },

        showFiles() {
            this.show = {
                overview: false,
                blockEditor: false,
                files: true,
                blocks: false,
            }
        }
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(postEditorStore, import.meta.hot))
}
