<template>
    <div class="block-editor">
        <div class="block-editor__header">
            <h5>File Menu</h5>
            <button @click="editor.showBlockEditor()" class="btn btn--sm btn--primary">Done</button>
        </div>
        
        <FileUploader/>
        <FileGallery :files="files.files" @selected="fileSelected"/>
    </div>
</template>

<script setup>
// TODO: Maybe we use events to trigger usePostEditorStore changes
import { usePostEditorStore } from '@/views/post-editor/store/usePostEditorStore'
import { useFileStore } from '@/domain/files/store/useFileStore'

const editor = usePostEditorStore()
const files = useFileStore()

const fileSelected = (file) => {
    emit('file-selected', file)
}

const emit = defineEmits(['file-selected'])

onMounted(() => {
    files.index()
})
</script>

<style lang="scss" scoped>
// TODO: Abstract this CSS, it's used in the block editor too
.block-editor__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-sm);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid var(--color-contrast-low);
}
</style>
