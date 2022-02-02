import { defineStore, acceptHMRUpdate } from 'pinia'
import { fileApi as FileApi } from '@/domain/files/api/fileApi'

export const useFileStore = defineStore('fileStore', {
    state: () => ({
        files: [],
        file: {},
        isLoading: false,
        isSaving: false,
    }),
    
    actions: {
        index() {
            FileApi.index()
                .then(response => {
                    this.files = response.data.data
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        
        store(file) {},
        
        show(id) {
            FileApi.show(id)
                .then(response => {
                    this.file = response.data.data
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        
        update(id, file) {},
        
        destroy(id) {},
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useFileStore, import.meta.hot))
}
