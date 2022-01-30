import { httpClient as HttpClient } from '@/app/api/httpClient'

const pageApi = {
    /**
     * List pages
     *
     * @param Object params [Key value params to sort by]
     * @return promise
     */
    index(params) {
        return HttpClient.get('/pages', { params: params })
    },

    /**
     * Store a new page
     *
     * @param Object page [Properties to create page from]
     * @return promise
     */
    store(page) {
        return HttpClient.post('/organizations/bloomcu/pages', page)
    },

    /**
     * Show a page
     *
     * @param Integer id [Id of the page you want to show]
     * @return promise
     */
    show(id) {
        return HttpClient.get(`/posts/${id}`)
    },

    /**
     * Update a page
     *
     * @param Integer id   [Id of the page you want to update]
     * @param Object  page [Properties to update page with]
     * @return promise
     */
    update(id, page) {
        return HttpClient.put(`/organizations/bloomcu/pages/${id}`, page)
    },

    /**
     * Destroy a page
     *
     * @param Integer id [Id of the page you want to destroy]
     * @return promise
     */
    destroy(id) {
        return HttpClient.delete(`/organizations/bloomcu/pages/${id}`)
    },

    /**
     * Replicate a page
     *
     * @param Integer id           [Id of the page you want to replicate]
     * @param Boolean is_blueprint [0 or 1 to specify page as blueprint or not]
     * @return promise
     */
    replicate(id, is_blueprint) {
        return HttpClient.post(`/organizations/bloomcu/pages/${id}/replicate`, {
            is_blueprint: is_blueprint
        })
    },
}

export { pageApi }
