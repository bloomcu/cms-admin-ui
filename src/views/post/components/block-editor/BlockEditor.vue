<template>
    <div class="block-editor">
        <div class="block-editor__header">
            <h5>Editor</h5>
            <button @click="editor.showDefault()" class="btn btn--sm btn--primary">Close</button>
        </div>
        <!-- <div v-if="block" class="editor-body app-scrollable">
            <component :is="block.component" :block="block" />
        </div> -->
    </div>
</template>

<script setup>
import { editorStore } from '@/views/post/store/editorStore'
const editor = editorStore()
</script>

<style lang="scss" scoped>
.block-editor__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-sm);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid var(--color-contrast-low);
}
</style>
