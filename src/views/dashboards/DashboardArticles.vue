<template>
    <LayoutSidebar>
        <div class="margin-bottom-md">
            <h1 class="text-md">Articles</h1>
        </div>
        
        <div class="app-dashboard">
            <div class="app-dashboard-column--left">
                <!-- <menu-nested :items="categories.data" @item-selected="filterByCategory"/> -->
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

const store = usePostStore()

onMounted(() => {
    store.index('articles')
})
</script>
