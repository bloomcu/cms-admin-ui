import { defineStore, acceptHMRUpdate } from 'pinia'
import { menuApi as MenuApi } from '@/domain/menus/api/menuApi'

export const useMenuStore = defineStore('menuStore', {
    state: () => ({
        menus: [],
        menu: {},
        isLoading: false,
    }),
    
    actions: {
        index() {
            MenuApi.index()
                .then(response => {
                    this.menus = response.data.data
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        
        store(menu) {},
        
        // TODO: Add 'location' scope to menus like we have on menus
        // So I can get a category tree by location instead of id
        show(id) {
            MenuApi.show(id)
                .then(response => {
                    this.menu = response.data.data[0]
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        
        update(id, menu) {
            this.isLoading = true
            
            MenuApi.update(this.menu.id, this.menu)
                .then(response => {
                    setTimeout(() => {
                        this.isLoading = false
                        this.menu = response.data.data
                    }, 500)
                }).catch(error => {
                    this.isLoading = false
                    Object.values(error.response.data).forEach(error => console.log(error))
                })
        },
        
        destroy(id) {
            MenuApi.destroy(id)
                .then(response => {
                    this.menu = {}
                    this.menus = this.menus.filter((menu) => menu.id !== id)
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
    import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot))
}
