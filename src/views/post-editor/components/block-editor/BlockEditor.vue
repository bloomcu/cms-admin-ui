<template>
    <div class="block-editor">
        <div class="block-editor__header">
            <h5>Block Editor</h5>
            <router-link :to="{ name: 'postEditor' }" @click.native="editor.showDefault()" class="btn btn--sm btn--primary">Close</router-link>
        </div>
        
        <button @click="editor.showFiles()" class="btn btn--sm btn--primary">Files</button>
        
        <!-- <div v-if="block" class="editor-body app-scrollable">
            <component :is="block.component" :block="block" />
        </div> -->
        
        <!-- Title -->
        <!-- <div class="margin-bottom-md">
            <label class="form-label margin-bottom-xxs">Title</label>
            <textarea v-model="block.data.title" class="form-control width-100%" type="text"></textarea>
        </div> -->
    </div>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { usePostEditorStore } from '@/views/post-editor/store/usePostEditorStore'

const store = usePostStore()
const editor = usePostEditorStore()
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
