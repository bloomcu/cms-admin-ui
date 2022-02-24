<template>
    <div v-if="store.post.blocks" class="layout">
        <Draggable
            :list="store.post.blocks"
            :group="{name: 'layout', pull: false, put: 'blocks'}"
            :animation="200"
            @change="onChange"
        >
            <BlockWrapper
                v-for="block in store.post.blocks"
                :key="block.uuid"
                :block="block"
                :id="block.uuid"
            />
        </Draggable>
    </div>
</template>

<script setup>
import Draggable from 'vuedraggable'
import { usePostStore } from '@/domain/posts/store/usePostStore'

const store = usePostStore()

const onChange = () => {
  store.update()
}
</script>

<style lang="scss">
.layout {
    position: relative;
    z-index: 0;
}
</style>
