import { httpClient as HttpClient } from '@/app/api/httpClient'

const pageApi = {
    /**
     * List pages
     *
     * @param Object params [Key/value params to sort by]
     * @return promise
     */
    index(params) {
        return HttpClient.get('/pages', { params: params })
    }
}

export { pageApi }
