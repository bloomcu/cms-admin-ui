<template>
    <div class="editor">
        <EditorHeader/>
        
        <!-- TODO: Can we remove the v-if check if store action is async? -->
        <div v-if="store" class="editor-wrapper">
            <!-- Left -->
            <div v-if="editor.show.overview" style="width: 12%;" class="editor-wrapper__left utility__scrollable">
                <Outline/>
            </div>
            
            <div v-if="editor.show.blockEditor" style="width: 25%;" class="editor-wrapper__left utility__scrollable">
                <BlockEditor/>
            </div>
            
            <div v-if="editor.show.files" style="width: 25%;" class="editor-wrapper__left utility__scrollable">
                <!-- <file-picker /> -->
                <div>
                    Files
                    <button @click="editor.showBlockEditor()" type="button" name="button">Close</button>
                </div>
            </div>

            <!-- Center -->
            <main class="editor-wrapper__center utility__scrollable">
                <Layout/>
                <!-- <button @click="editor.showBlockEditor()" type="button" name="button">Edit Block</button> -->
            </main>

            <!-- Right -->
            <div v-if="editor.show.blocks" class="editor-wrapper__right utility__scrollable">
                <BlockMenu/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { editorStore } from '@/views/post/store/editorStore'

const store = usePostStore()
const editor = editorStore()

onMounted(() => {
    const route = getCurrentInstance().proxy.$route
    store.show(route.params.post)
})
</script>

<style lang="scss" scoped>
.editor {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #f4f3f6; // TODO: Replace with var
}

.editor-wrapper {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    margin: var(--space-sm) var(--space-md);
    min-height: 0;
}

.editor-wrapper__left {
    padding-right: var(--space-md);
}

.editor-wrapper__center {
    width: 78%;

    // Flexbox
    display: flex;
    flex-direction: column;

    // Style
    background-color: var(--color-white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
}

.editor-wrapper__right {
    width: 10%;
    padding-left: var(--space-xs);
}
</style>
