import { defineStore, acceptHMRUpdate } from 'pinia'
import PageApi from '@/pages/api/PageApi'

export const usePagesStore = defineStore('pages-store', {
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
