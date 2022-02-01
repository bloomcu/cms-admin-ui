import { httpClient as HttpClient } from '@/app/api/httpClient'

const categoryApi = {    
    /**
     * List categories
     *
     * @param Object params [Key/value params to filter by]
     * @return promise
     */
    index() {
        return HttpClient.get(`/categories`)
    },
    
    /**
     * Show a category
     *
     * @param Integer id [Id of the post you want to show]
     * @return promise
     */
    show(id) {
        return HttpClient.get(`/categories/${id}`)
    },
}

export { categoryApi }
