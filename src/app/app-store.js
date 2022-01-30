import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAppStore = defineStore('app-store', {
    state: () => ({
        count: 0,
    }),
    
    getters: {
        doubleCount: (state) => {
            return state.count * 2
        },
        
        trippleCount: (state) => state.count * 3
    },
    
    actions: {
        increment() {
            this.count++
        }
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
