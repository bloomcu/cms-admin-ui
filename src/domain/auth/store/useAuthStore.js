import { defineStore, acceptHMRUpdate } from 'pinia'
import { authApi as AuthApi } from '@/domain/auth/api/authApi'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
      user: null,
      isLoading: false,
    }),
    
    getters: {
      getUser: (state) => state.user
    },
    
    actions: {
      register(credentials) {
          this.isLoading = true
          
          AuthApi.register(credentials)
              .then(response => {
                  console.log(response)
                  // this.posts = response.data.data
                  this.isLoading = false
              }).catch(error => {
                  Object.values(error.response.data).forEach(error => console.log(error))
                  this.isLoading = false
              })
      },
      
      login(credentials) {
          this.isLoading = true
          
          AuthApi.login(credentials)
              .then(response => {
                  console.log(response)
                  // this.posts = response.data.data
                  this.isLoading = false
              }).catch(error => {
                  Object.values(error.response.data).forEach(error => console.log(error))
                  this.isLoading = false
              })
      },
      
      me() {
          this.isLoading = true
          
          AuthApi.me()
              .then(response => {
                  console.log(response)
                  // this.posts = response.data.data
                  this.isLoading = false
              }).catch(error => {
                  Object.values(error.response.data).forEach(error => console.log(error))
                  this.isLoading = false
              })
      },
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
