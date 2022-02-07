import { httpClient as HttpClient } from '@/app/api/httpClient'

const blockApi = {    
    /**
     * List block blueprints
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    indexBlueprints(params) {
        return HttpClient.get(`/block/blueprints`, { params: params })
    },
    
    /**
     * Destroy a block
     *
     * @param String uuid [Uuid for the block you want to destroy]
     * @return promise
     */
    destroy(uuid) {
        return HttpClient.delete(`/blocks/${uuid}`)
    },
}

export { blockApi }
