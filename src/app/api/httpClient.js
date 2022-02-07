import axios from 'axios'
// import useAuth from '@/app/composables/useAuth'

// TODO: Add token to all requests
// const { token } = useAuth()

/**
 * CMS API Client
 * An instance of Axios we can use for all API requests to CMS
 */
const httpClient = axios.create({
    // baseURL: 'http://cms.test/api/bloomcu/website',
    baseURL: 'https://cms-api.bloomcu.com/api/bloomcu/website',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        // 'Authorization': `Basic ${token}`
        'Content-Type': 'application/json'
    }
})

export { httpClient }
