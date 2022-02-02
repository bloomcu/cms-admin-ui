import { httpClient as HttpClient } from '@/app/api/httpClient'

const menuApi = {    
    /**
     * List menus
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index() {
        return HttpClient.get(`/menus`)
    },
    
    /**
     * Store a new menu
     *
     * @param Object post [Properties to create menu from]
     * @return promise
     */
    store(menu) {
        menu = JSON.parse(JSON.stringify(menu))
        
        return HttpClient.post('/menus', menu)
    },
    
    /**
     * Show a menu
     *
     * @param Integer id [Id of the menu you want to show]
     * @return promise
     */
    show(id) {
        return HttpClient.get(`/menus/${id}`)
    },
    
    /**
     * Update a menu
     *
     * @param Integer id   [Id of the menu you want to update]
     * @param Object  post [Properties to update post with]
     * @return promise
     */
    update(id, menu) {
        menu = JSON.parse(JSON.stringify(menu))
        
        return HttpClient.put(`/menus/${id}`, menu)
    },

    /**
     * Destroy a menu
     *
     * @param Integer id [Id of the menu you want to destroy]
     * @return promise
     */
    destroy(id) {
        return HttpClient.delete(`/menus/${id}`)
    },
}

export { menuApi }
