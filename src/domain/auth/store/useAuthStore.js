import { defineStore, acceptHMRUpdate } from 'pinia'
import { auth } from '@/firebase.js'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
      user: null
    }),
    
    getters: {
      getUser: (state) => state.user
    },
    
    actions: {
      fetchUser() {
        auth.onAuthStateChanged(async user => {
          if (user === null) {
            this.user = null
          } else {
            this.user = user

            // if (router.isReady() && router.currentRoute.value.path === '/login') {
            //   router.push('/')
            // }
          }
        })
      }
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
