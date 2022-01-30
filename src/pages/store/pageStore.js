import { defineStore, acceptHMRUpdate } from 'pinia'

import { postApi as PostApi } from '@/app/api/postApi'
import { pageApi as PageApi } from '@/pages/api/pageApi'

export const pageStore = defineStore('pageStore', {
    state: () => ({
        pages: [],
        page: {},
        isLoading: false,
        isSaving: false,
        isShowingSettings: false,
    }),
    
    // getters: {},
    
    actions: {
        updateTitle(title) {
            this.page.title = title
        },
        
        index(params) {
            PageApi.index(params)
            .then(response => {
                this.pages = response.data.data
            }).catch(error => {
                console.log('Error', error.response.data)
            })
        },
        
        store() {},
        
        show(id) {
            PostApi.show(id)
                .then(response => {
                    this.page = response.data.data
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        
        update() {
            this.isSaving = true
            
            PostApi.update(this.page.id, this.page)
                .then(response => {
                    setTimeout(() => {
                        this.isSaving = false
                        this.page = response.data.data
                    }, 500)
                }).catch(error => {
                    this.isSaving = false
                    Object.values(error.response.data).forEach(error => console.log(error))
                })
        },
        
        destroy(id) {
            PostApi.destroy(id)
                .then(response => {
                    this.page = {}
                    this.pages = this.pages.filter((page) => page.id !== id)
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        
        replicate(id) {
            PostApi.replicate(id)
                .then(response => {
                    this.pages.unshift(response.data.data)
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(pageStore, import.meta.hot))
}
