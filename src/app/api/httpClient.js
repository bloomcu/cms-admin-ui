import axios from 'axios'
// import useAuth from '@/app/composables/useAuth'

// TODO: Add token to all requests
// const { token } = useAuth()

/**
 * CMS API Client
 * An instance of Axios we can use for all API requests to CMS
 */
const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        // 'Authorization': `Basic ${token}`
        // 'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/json'
    }
})

export { httpClient }
