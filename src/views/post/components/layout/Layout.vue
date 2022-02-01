<template>
    <div v-if="store.post.layout" class="layout">
        <Block
            v-for="block in store.post.layout.blocks"
            :key="block.uuid"
            :block="block"
            :editing="false"
        />
    </div>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
const store = usePostStore()
</script>

<style lang="scss" scoped>
</style>
