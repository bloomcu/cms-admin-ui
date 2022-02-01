import { defineStore, acceptHMRUpdate } from 'pinia'
import { postApi as PostApi } from '@/domain/posts/api/postApi'

export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: [],
        post: {},
        isLoading: false,
        isSaving: false,
        isShowingSettings: false,
    }),
    
    getters: {
        getUrl: (state) => {
            return ['bloomcu.com', state.post.path, state.post.slug].filter(Boolean).join('/')
        }
    },
    
    actions: {
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
                    console.log('Error', error.response.data)
                })
        },
        
        update() {
            this.isSaving = true
            
            PostApi.update(this.post.id, this.post)
                .then(response => {
                    setTimeout(() => {
                        this.isSaving = false
                        this.post = response.data.data
                    }, 500)
                }).catch(error => {
                    this.isSaving = false
                    Object.values(error.response.data).forEach(error => console.log(error))
                })
        },
        
        destroy(id) {
            PostApi.destroy(id)
                .then(response => {
                    this.post = {}
                    this.posts = this.posts.filter((page) => page.id !== id)
                }).catch(error => {
                    console.log('Error', error.response.data)
                })
        },
        
        replicate(id) {
            PostApi.replicate(id)
                .then(response => {
                    this.posts.unshift(response.data.data)
                }).catch(error => {
                    console.log('Error', error.response.data)
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
