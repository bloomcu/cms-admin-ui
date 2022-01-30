<template>
    <div>
        <div class="margin-bottom-md">
            <h1 class="text-md">{{ store.page.title }}</h1>
        </div>
        
        <div class="margin-bottom-md">
            <p>Slug: {{ store.page.slug }}</p>
        </div>
        
        <!-- TODO: Remove, this is a test -->
        <button @click="store.updateTitle('Updated Title')">Update Title</button>
    </div>
</template>

<script setup>
import { usePagesStore } from '@/pages/pageStore'
const route = getCurrentInstance().proxy.$route
const store = usePagesStore()

onMounted(() => {    
    store.show(route.params.page)
})
</script>
