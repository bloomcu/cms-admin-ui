import { defineStore, acceptHMRUpdate } from 'pinia'
import { categoryApi as CategoryApi } from '@/domain/categories/api/categoryApi'

export const useCategoryStore = defineStore('categoryStore', {
    state: () => ({
        categories: [],
        category: {},
        isLoading: false,
    }),
    
    actions: {
        index() {
            CategoryApi.index()
                .then(response => {
                    this.categories = response.data.data
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        
        store(category) {},
        
        // TODO: Add 'location' scope to categories like we have on menus
        // So I can get a category tree by location instead of id
        show(id) {
            CategoryApi.show(id)
                .then(response => {
                    this.category = response.data.data[0]
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        
        update(id, category) {},
        
        destroy(id) {},
        
        replicate(id) {},
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot))
}
