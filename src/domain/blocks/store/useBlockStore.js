import { defineStore, acceptHMRUpdate } from 'pinia'
import { blockApi as BlockApi } from '@/domain/blocks/api/blockApi'

export const useBlockStore = defineStore('blockStore', {
    state: () => ({
        blocks: [],
        block: {},
        isLoading: false,
    }),
    
    actions: {
        indexBlueprints(params = {}) {
            BlockApi.indexBlueprints(params)
                .then(response => {
                    this.blocks = response.data.data
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        
        index(params = {}) {},
        
        store() {},
        
        show(id) {},
        
        update() {},
        
        destroy(id) {},
        
        replicate(id) {},
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useBlockStore, import.meta.hot))
}
