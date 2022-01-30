<template>
    <div>
        <div class="margin-bottom-md">
            <h1 class="text-md">{{ store.page.title }}</h1>
        </div>
        
        <div class="margin-bottom-md">
            <p>Slug: {{ store.page.slug }}</p>
        </div>
        
        <button @click="destroy()" class="btn btn--sm">Delete</button>
    </div>
</template>

<script setup>
import { usePagesStore } from '@/pages/store/pageStore'

const router = getCurrentInstance().proxy.$router
const route = getCurrentInstance().proxy.$route
const store = usePagesStore()

onMounted(() => {    
    store.show(route.params.page)
})

const destroy = () => {
    store.destroy(route.params.page)
    router.push({ name: 'pageIndex' })
}
</script>
