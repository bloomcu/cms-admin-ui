<template>
    <div>
        <div class="margin-bottom-md">
            <h1 class="text-md">Articles</h1>
        </div>
        
        <div class="margin-bottom-md">
            <ul class="list">
                <li v-for="post in store.posts" :key="post.id" class="flex items-center gap-sm margin-bottom-sm">
                    <RouterLink :to="{ name: 'postEditor', params: { post: post.id } }">{{ post.title }}</RouterLink>
                    <button @click="store.replicate(post.id)" class="btn btn--sm">Replicate</button>
                    <button @click="store.destroy(post.id)" class="btn btn--sm">Delete</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { postStore } from '@/domain/posts/store/postStore'

const store = postStore()

onMounted(() => {
    store.index('articles')
})
</script>
