import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
      loggedIn: false,
      uid: '',
      displayName: '',
      email: '',
    }),
    
    actions: {
        fetchUser(user) {
          this.loggedIn = user !== null
          
          if (user) {
            this.uid = user.uid
            this.displayName = user.displayName
            this.email = user.email
            
          } else {
            this.uid = ''
            this.displayName = ''
            this.email = ''
          }
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
