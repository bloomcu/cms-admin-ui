import { httpClient as HttpClient } from '@/app/api/httpClient'
import axios from 'axios'

const authApi = {
    register(credentials) {
      let { name, email, password, password_confirmation } = credentials
    
      axios.get(`http://cms.test/sanctum/csrf-cookie`)
      
      return HttpClient.post(`/auth/register`, {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      })
    },
    
    login(credentials) {
      let { email, password } = credentials
    
      axios.get(`http://cms.test/sanctum/csrf-cookie`)
      
      return HttpClient.post(`/auth/login`, {
        email: email,
        password: password
      })
    },
    
    me() {
      axios.get(`http://cms.test/sanctum/csrf-cookie`)
      
      return HttpClient.get(`/auth/me`)
    },
}

export { authApi }
