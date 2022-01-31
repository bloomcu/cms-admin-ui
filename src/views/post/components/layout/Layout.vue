<template>
    <div class="layout">
        <Block
            v-for="block in store.post.layout.blocks"
            :key="block.uuid"
            :block="block"
            :editing="false"
        />
    </div>
</template>

<script setup>
import { postStore } from '@/domain/posts/store/postStore'
const store = postStore()
</script>

<style lang="scss" scoped>
</style>
