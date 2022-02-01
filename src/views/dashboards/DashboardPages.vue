<template>
    <LayoutSidebar>
        <div class="margin-bottom-md">
            <h1 class="text-md">Pages</h1>
        </div>
        
        <div class="app-dashboard">
            <div class="app-dashboard-column--left">
                <AppNestedMenu :items="categoryStore.category.children" @selected="filter"/>
            </div>
            <div class="app-dashboard-column--right">
                <!-- <pages-table :pages="pages" :loading="pagesLoading"/> -->
                <ul class="list">
                    <li v-for="post in store.posts" :key="post.id" class="flex items-center gap-sm margin-bottom-sm">
                        <RouterLink :to="{ name: 'post', params: { post: post.id } }">{{ post.title }}</RouterLink>
                        <button @click="store.replicate(post.id)" class="btn btn--sm">Replicate</button>
                        <button @click="store.destroy(post.id)" class="btn btn--sm">Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    </LayoutSidebar>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { useCategoryStore } from '@/domain/categories/store/useCategoryStore'

const store = usePostStore()
const categoryStore = useCategoryStore()

const filter = () => {
    // TODO: Hit post api again passing filter params
    console.log('Filtering...')
}

onMounted(() => {
    store.index('pages')
    categoryStore.show(1)
})
</script>
