<template>
    <div>
        Hello
    </div>
</template>

<script setup>
import { postStore } from '@/domain/posts/store/postStore'

const store = postStore()
const route = getCurrentInstance().proxy.$route

onMounted(() => {    
    store.show(route.params.post)
})
</script>
