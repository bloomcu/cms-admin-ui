import { defineStore, acceptHMRUpdate } from 'pinia'
import { blockApi as BlockApi } from '@/domain/posts/api/blockApi'

export const blockStore = defineStore('blockStore', {
    state: () => ({
        blocks: [],
        block: {},
        isLoading: false,
        isSaving: false,
    }),
    
    actions: {
        index(params = {}) {
            BlockApi.index(type, params)
                .then(response => {
                    this.blocks = response.data.data
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        // 
        // store() {},
        // 
        // show(id) {
        //     BlockApi.show(id)
        //         .then(response => {
        //             this.block = response.data.data
        //         }).catch(error => {
        //             console.log('Error', error.response.data)
        //         })
        // },
        // 
        // update() {
        //     this.isSaving = true
        // 
        //     BlockApi.update(this.block.id, this.block)
        //         .then(response => {
        //             setTimeout(() => {
        //                 this.isSaving = false
        //                 this.block = response.data.data
        //             }, 500)
        //         }).catch(error => {
        //             this.isSaving = false
        //             Object.values(error.response.data).forEach(error => console.log(error))
        //         })
        // },
        // 
        // destroy(id) {
        //     BlockApi.destroy(id)
        //         .then(response => {
        //             this.block = {}
        //             this.blocks = this.blocks.filter((page) => page.id !== id)
        //         }).catch(error => {
        //             console.log('Error', error.response.data)
        //         })
        // },
        // 
        // replicate(id) {
        //     BlockApi.replicate(id)
        //         .then(response => {
        //             this.blocks.unshift(response.data.data)
        //         }).catch(error => {
        //             console.log('Error', error.response.data)
        //         })
        // },
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(blockStore, import.meta.hot))
}
