<template>
    <div>
        <div class="margin-bottom-md">
            <h1 class="text-md">Pages</h1>
        </div>
        
        <div class="margin-bottom-md">
            <ul class="list">
                <li v-for="page in store.pages" :key="page.id" class="flex items-center gap-sm margin-bottom-sm">
                    <RouterLink :to="{ name: 'pageShow', params: { page: page.id } }">{{ page.title }}</RouterLink>
                    <button @click="store.replicate(page.id)" class="btn btn--sm">Replicate</button>
                    <button @click="store.destroy(page.id)" class="btn btn--sm">Delete</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { pageStore } from '@/pages/store/pageStore'

const store = pageStore()

onMounted(() => {
    store.index()
})
</script>
