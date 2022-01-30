import { defineStore, acceptHMRUpdate } from 'pinia'

import { postApi as PostApi } from '@/app/api/postApi'
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
        
        show(id) {
            PostApi.show(id)
                .then(response => {
                    this.page = response.data.data
                }).catch(error => {
                    console.log(error)
                })
        },
        
        update() {},
        
        destroy(id) {
            PostApi.destroy(id)
                .then(response => {
                    this.page = {}
                    this.pages = this.pages.filter((page) => page.id !== id)
                }).catch(error => {
                    console.log(error)
                })
        },
        
        replicate(id) {
            PostApi.replicate(id)
                .then(response => {
                    this.pages.unshift(response.data.data)
                }).catch(error => {
                    console.log(error)
                })
        },
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePagesStore, import.meta.hot))
}
