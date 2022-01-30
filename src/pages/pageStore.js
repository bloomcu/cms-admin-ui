import { defineStore, acceptHMRUpdate } from 'pinia'
import { pageApi as PageApi } from '@/pages/api/pageApi'

export const usePagesStore = defineStore('pageStore', {
    state: () => ({
        pages: [],
        page: {},
    }),
    
    getters: {},
    
    actions: {
        updateTitle(title) {
            this.page.title = title
        },
        
        index(params) {
            PageApi.index(params)
            .then(response => {
                this.pages = response.data.data
            }).catch(error => {
                console.log(error)
            })
        },
        
        store() {},
        show() {},
        update() {},
        destroy() {},
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePagesStore, import.meta.hot))
}
