<template>
    <div class="editor">
        <EditorHeader/>
        <PostSettingsModal />
        
        <!-- TODO: Can we remove the v-if check if store action is async? -->
        <div v-if="store" class="editor-wrapper">
            <!-- Left -->
            <div v-if="editor.show.overview" style="width: 12%;" class="editor-wrapper__left app-scrollable">
                <Outline/>
            </div>
            <div v-if="editor.show.blockEditor" style="width: 25%;" class="editor-wrapper__left app-scrollable">
                <BlockEditor/>
            </div>

            <!-- Center -->
            <main class="editor-wrapper__center app-scrollable">
                <Layout/>
            </main>

            <!-- Right -->
            <div v-if="editor.show.blocks" class="editor-wrapper__right app-scrollable">
                <BlockLibrary/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { usePostEditorStore } from '@/views/post-editor/store/usePostEditorStore'

const store = usePostStore()
const editor = usePostEditorStore()
const router = getCurrentInstance().proxy.$router
const route = getCurrentInstance().proxy.$route

onMounted(() => {
    store.show(route.params.id)
})

router.beforeResolve(async (to, from, next) => {
  if (from.name === 'postBlockEditor' || from.name === 'postEditor') {
      if (!store.isLoading) {
        store.update()
      }
  }
  next()
})
</script>

<!-- TODO: These editor classes may need to be abstracted
because the menu and block editors will share many of them -->
<style lang="scss">
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
