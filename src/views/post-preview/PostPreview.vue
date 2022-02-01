<template>
    <div>
        Hello
    </div>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'

const store = usePostStore()
const route = getCurrentInstance().proxy.$route

onMounted(() => {    
    store.show(route.params.post)
})
</script>
