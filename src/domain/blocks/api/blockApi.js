import { httpClient as HttpClient } from '@/app/api/httpClient'

const blockApi = {    
    /**
     * List blocks
     *
     * @param Object params [Key/value params to filter by]
     * @return promise
     */
    index(type, params) {
        return HttpClient.get(`/block/blueprints`, { params: params })
    },
    // 
    // /**
    //  * Store a new post
    //  *
    //  * @param Object post [Properties to create post from]
    //  * @return promise
    //  */
    // store(post) {
    //     post = JSON.parse(JSON.stringify(post))
    // 
    //     return HttpClient.post('/pages', post)
    // },
    // 
    // /**
    //  * Show a post
    //  *
    //  * @param Integer id [Id of the post you want to show]
    //  * @return promise
    //  */
    // show(id) {
    //     return HttpClient.get(`/posts/${id}`)
    // },
    // 
    // /**
    //  * Update a post
    //  *
    //  * @param Integer id   [Id of the post you want to update]
    //  * @param Object  post [Properties to update post with]
    //  * @return promise
    //  */
    // update(id, post) {
    //     post = JSON.parse(JSON.stringify(post))
    // 
    //     return HttpClient.put(`/posts/${id}`, post)
    // },
    // 
    // /**
    //  * Destroy a post
    //  *
    //  * @param Integer id [Id of the post you want to destroy]
    //  * @return promise
    //  */
    // destroy(id) {
    //     return HttpClient.delete(`/posts/${id}`)
    // },
    // 
    // /**
    //  * Replicate a post
    //  *
    //  * @param Integer id [Id of the post you want to replicate]
    //  * @return promise
    //  */
    // replicate(id) {
    //     return HttpClient.post(`/posts/${id}/replicate`)
    // },
    // 
    // /**
    //  * Check slug
    //  *
    //  * @param String slug [Post slug you want to check for uniqueness]
    //  * @return promise
    //  */
    // checkSlug(slug) {
    //     return HttpClient.post(`/post/check-slug`)
    // },
}

export { blockApi }
