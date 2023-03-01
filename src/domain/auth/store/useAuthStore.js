import { defineStore, acceptHMRUpdate } from 'pinia'
import { authApi as AuthApi } from '@/domain/auth/api/authApi'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
      token: localStorage.getItem('access_token') || null,
      user: null,
      isLoading: false,
    }),
    
    getters: {
      loggedIn: (state) => state.token != null,
      getUser: (state) => state.user
    },
    
    actions: {
      async register(credentials) {
          this.isLoading = true
          
          await AuthApi.register(credentials)
              .then(response => {
                  console.log(response)
                  
                  const token = response.data.data.access_token
                  localStorage.setItem('access_token', token)
                  this.token = token
                  this.isLoading = false
                  
                  window.location.replace('/pages')
              }).catch(error => {
                  Object.values(error.response.data).forEach(error => console.log(error))
                  this.isLoading = false
              })
      },
      
      async login(credentials) {
          this.isLoading = true
          
          await AuthApi.login(credentials)
              .then(response => {
                  console.log(response)
                  
                  const token = response.data.data.access_token
                  localStorage.setItem('access_token', token)
                  this.token = token
                  this.isLoading = false
                  
                  window.location.replace('/pages')
              }).catch(error => {
                  Object.values(error.response.data).forEach(error => console.log(error))
                  this.isLoading = false
              })
      },
      
      async logout() {
          this.isLoading = true
          
          await AuthApi.logout()
              .then(response => {
                  console.log(response)
                  
                  localStorage.removeItem('access_token')
                  this.token = null
                  this.isLoading = false
                  
                  window.location.replace('/login')
              }).catch(error => {
                  Object.values(error.response.data).forEach(error => console.log(error))
                  this.isLoading = false
              })
      },
      
      me() {
          this.isLoading = true
          
          AuthApi.me()
              .then(response => {
                  this.user = response.data.data
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
