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
     * Show a menu
     *
     * @param Integer id [Id of the menu you want to show]
     * @return promise
     */
    show(id) {
        return HttpClient.get(`/menus/${id}`)
    },
}

export { menuApi }
