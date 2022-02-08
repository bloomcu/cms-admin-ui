import { defineStore, acceptHMRUpdate } from 'pinia'
import { postApi as PostApi } from '@/domain/posts/api/postApi'
import { blockApi as BlockApi } from '@/domain/blocks/api/blockApi'

export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: [],
        post: {},
        isLoading: false,
        isShowingSettings: false,
    }),
    
    getters: {
        getUrl: (state) => {
            return ['bloomcu.com', state.post.path, state.post.slug].filter(Boolean).join('/')
        },
        
        // TODO: Move this the block store? 
        getBlockByUUID: (state) => {
            return (uuid) => state.post.layout.blocks.find(
                block => block.uuid === uuid
            )
        }
    },
    
    actions: {
        indexBlueprints(params = {}) {
            PostApi.indexBlueprints(params)
                .then(response => {
                    this.posts = response.data.data
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        
        index(type = 'pages', params = {}) {
            PostApi.index(type, params)
                .then(response => {
                    this.posts = response.data.data
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        
        store() {},
        
        show(id) {
            PostApi.show(id)
                .then(response => {
                    this.post = response.data.data
                }).catch(error => {
                    Object.values(error.response.data).forEach(error => console.log(error))
                })
        },
        
        update() {
            this.isLoading = true
            
            PostApi.update(this.post.id, this.post)
                .then(response => {
                    setTimeout(() => {
                        this.isLoading = false
                        // this.post = response.data.data
                    }, 1500)
                }).catch(error => {
                    this.isLoading = false
                    Object.values(error.response.data).forEach(error => console.log(error))
                })
        },
        
        destroy(id) {
            PostApi.destroy(id)
                .then(response => {
                    this.post = {}
                    this.posts = this.posts.filter((page) => page.id !== id)
                }).catch(error => {
                    Object.values(error.response.data).forEach(error => console.log(error))
                })
        },
        
        publish() {
            this.isLoading = true
            
            PostApi.publish(this.post.id)
                .then(response => {
                    setTimeout(() => {
                        this.isLoading = false
                        this.post.published_at = response.data.data.published_at
                    }, 800)
                }).catch(error => {
                    this.isLoading = false
                    Object.values(error.response.data).forEach(error => console.log(error))
                })
        },
        
        unpublish() {
            this.isLoading = true
            
            PostApi.unpublish(this.post.id)
                .then(response => {
                    setTimeout(() => {
                        this.isLoading = false
                        this.post.published_at = null
                    }, 800)
                }).catch(error => {
                    this.isLoading = false
                    Object.values(error.response.data).forEach(error => console.log(error))
                })
        },
        
        replicate(id) {
            PostApi.replicate(id)
                .then(response => {
                    this.post = response.data.data
                    this.posts.unshift(response.data.data)
                }).catch(error => {
                    Object.values(error.response.data).forEach(error => console.log(error))
                })
        },
        
        destroyBlock(uuid) {
            BlockApi.destroy(uuid)
                .then(response => {
                    this.post.layout.blocks = this.post.layout.blocks.filter((block) => block.uuid !== uuid)
                }).catch(error => {
                    Object.values(error.response.data).forEach(error => console.log(error))
                })
        },
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePostStore, import.meta.hot))
}
