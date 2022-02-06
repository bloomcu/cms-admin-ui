<template>
    <div v-if="store.post.layout" class="layout">
        <Draggable
            :list="store.post.layout.blocks"
            :group="{name: 'layout', pull: false, put: 'blocks'}"
            :animation="200"
        >
            <Block
                v-for="block in store.post.layout.blocks"
                :key="block.uuid"
                :block="block"
                :editing="false"
            />
        </Draggable>
    </div>
</template>

<script setup>
import Draggable from 'vuedraggable'
import { usePostStore } from '@/domain/posts/store/usePostStore'

const store = usePostStore()
</script>

<style lang="scss">
.layout {
    z-index: 0;
}
</style>
