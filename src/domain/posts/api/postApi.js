import { httpClient as HttpClient } from '@/app/api/httpClient'

const postApi = {        
    /**
     * List posts
     *
     * @param String type [Type of posts, can be 'page' or 'article']
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index(params) {
        return HttpClient.get(`/posts`, { params: params })
    },
    
    /**
     * Store a new post
     *
     * @param Object post [Properties to create post from]
     * @return promise
     */
    store(post) {
        post = JSON.parse(JSON.stringify(post))
        
        return HttpClient.post('/pages', post)
    },

    /**
     * Show a post
     *
     * @param Integer id [Id of the post you want to show]
     * @return promise
     */
    show(id) {
        return HttpClient.get(`/posts/${id}`)
    },

    /**
     * Update a post
     *
     * @param Integer id   [Id of the post you want to update]
     * @param Object  post [Properties to update post with]
     * @return promise
     */
    update(id, post) {
        post = JSON.parse(JSON.stringify(post))
        
        return HttpClient.put(`/posts/${id}`, post)
    },

    /**
     * Destroy a post
     *
     * @param Integer id [Id of the post you want to destroy]
     * @return promise
     */
    destroy(id) {
        return HttpClient.delete(`/posts/${id}`)
    },
    
    /**
     * Publish a post
     *
     * @param Integer id [Id of the post you want to publish]
     * @return promise
     */
    publish(id) {
        return HttpClient.put(`/posts/${id}/publish`)
    },
    
    /**
     * Unpublish a post
     *
     * @param Integer id [Id of the post you want to unpublish]
     * @return promise
     */
    unpublish(id) {
        return HttpClient.put(`/posts/${id}/unpublish`)
    },

    /**
     * Replicate a post
     *
     * @param Integer id [Id of the post you want to replicate]
     * @return promise
     */
    replicate(id) {
        return HttpClient.post(`/posts/${id}/replicate`)
    },
    
    /**
     * Check slug
     *
     * @param String slug [Post slug you want to check for uniqueness]
     * @return promise
     */
    checkSlug(slug) {
        return HttpClient.post(`/post/check-slug`)
    },
}

export { postApi }
