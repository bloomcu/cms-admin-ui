import axios from 'axios'

/**
 * CMS API Client
 * An instance of Axios we can use for all API requests to CMS
 */
const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    // withCredentials: true,
    headers: {
        Accept: 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    }
})

export { httpClient }
