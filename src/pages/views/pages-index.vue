<template>
    <div>
        <div class="margin-bottom-md">
            <h1 class="text-md">Pages</h1>
        </div>
        
        <div class="margin-bottom-md">
            <ul class="list list--border">
                <li v-for="page in store.pages" :key="page.id">
                    <RouterLink :to="{ name: 'pages-show', params: { pageId: page.id } }">{{ page.title }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { usePagesStore } from '@/pages/pages-store'

const store = usePagesStore()

onMounted(() => {
    store.index()
})
</script>
