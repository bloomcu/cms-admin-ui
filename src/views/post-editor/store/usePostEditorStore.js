import { defineStore, acceptHMRUpdate } from 'pinia'

export const usePostEditorStore = defineStore('usePostEditorStore', {
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

        showBlockEditor(blockUUID) {
            this.show = {
                overview: false,
                blockEditor: true,
                files: false,
                blocks: false,
            }
        },

        showFiles() {
            this.show.files = true
        }
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePostEditorStore, import.meta.hot))
}
