<template>
  <div v-if="store.post">
    <Block
        v-for="block in store.post.blocks"
        :key="block.uuid"
        :block="block"
    />
  </div>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'

const store = usePostStore()
const route = getCurrentInstance().proxy.$route

onMounted(() => {    
    store.show(route.params.id)
})
</script>
