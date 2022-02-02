import { httpClient as HttpClient } from '@/app/api/httpClient'

const fileApi = {    
    /**
     * List files
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index() {
        return HttpClient.get(`/files`)
    },
    
    /**
     * Show a file
     *
     * @param Integer id [Id of the file you want to show]
     * @return promise
     */
    show(id) {
        return HttpClient.get(`/files/${id}`)
    },
}

export { fileApi }
