import { httpClient as HttpClient } from '@/app/api/httpClient'
import axios from 'axios'

const authApi = {
    register(credentials) {
      let { 
        name, 
        email, 
        password, 
        password_confirmation 
      } = credentials
      
      return HttpClient.post(`/auth/register`, {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      })
    },
    
    login(credentials) {
      let { 
        email, 
        password 
      } = credentials
      
      return HttpClient.post(`/auth/login`, {
        email: email,
        password: password
      })
    },
    
    logout() {
      return HttpClient.post(`/auth/logout`)
    },
    
    me() {
      return HttpClient.get(`/auth/me`)
    },
}

export { authApi }
