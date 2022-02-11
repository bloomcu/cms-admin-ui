import { defineStore, acceptHMRUpdate } from 'pinia'
import { blockApi as BlockApi } from '@/domain/blocks/api/blockApi'

export const useBlockStore = defineStore('blockStore', {
    state: () => ({
        blocks: [],
        block: {},
        isLoading: false,
    }),
    
    actions: {
        index(params = {}) {
            this.blocks = []
            this.isLoading = true
            
            BlockApi.index(params)
                .then(response => {
                    this.blocks = response.data.data
                    this.isLoading = false
                }).catch(error => {
                    Object.values(error.response.data).forEach(error => console.log(error))
                    this.isLoading = false
                })
        },
        
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
