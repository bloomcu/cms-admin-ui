<template>
    <div>
        <div v-if="editor.show.blockEditor && !editor.show.files" class="block-editor">
            <div class="block-editor__header">
                <h5>{{ block.title }}</h5>
                <router-link @click.native="editor.showDefault()" :to="{ name: 'postEditor' }" class="btn btn--sm btn--primary">Close</router-link>
            </div>
            
            <div class="block-editor__body app-scrollable">
                <component :is="`${block.group}Editor`" :block="block"/>
            </div>
        </div>
        
        <div v-if="editor.show.files" class="block-editor">
            <div class="block-editor__header">
                <h5>File Menu</h5>
                <button @click="editor.showBlockEditor()" class="btn btn--sm btn--primary">Done</button>
            </div>
            
            <div class="block-editor__body app-scrollable">
                <FileUploader/>
                <FileGallery @selected="setFile"/>
            </div>
        </div>
    </div>
</template>

<script>
import FeatureEditor from '@/domain/blocks/components/editors/FeatureEditor.vue'
import HeroEditor from '@/domain/blocks/components/editors/HeroEditor.vue'
import TableEditor from '@/domain/blocks/components/editors/TableEditor.vue'
import TestimonialEditor from '@/domain/blocks/components/editors/TestimonialEditor.vue'
import TextColumnsEditor from '@/domain/blocks/components/editors/TextColumnsEditor.vue'
import VideoBackgroundHeroEditor from '@/domain/blocks/components/editors/VideoBackgroundHeroEditor.vue'

export default defineComponent({
    components: {
      FeatureEditor,
      HeroEditor,
      TableEditor,
      TestimonialEditor,
      TextColumnsEditor,
      VideoBackgroundHeroEditor,
    }
})  
</script>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { usePostEditorStore } from '@/views/post-editor/store/usePostEditorStore'

const store = usePostStore()
const editor = usePostEditorStore()

// TODO: Can I just use Vue provide/inject to make the current route available
// across the whole app? Instead of initializing each place I need it.
const route = getCurrentInstance().proxy.$route
const block = store.getBlockByUUID(route.params.uuid)

const setFile = (file) => {
    // TODO: The file menu should probably open as an overlay above the editor.
    
    // TODO: I don't like this at all. We need a better way to communitcate the
    // selected file out to the block being edited. Look into a higher level event bus.
    block.data.image.file_id = file.id
    block.data.image.name = file.name
    block.data.image.src = file.src
}

const setTable = (table) => {
  console.log(table)
}
</script>

<style lang="scss">
.block-editor {
    .filepond--panel-root {
        background-color: var(--color-white);
    }    
}

.block-editor__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-sm);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid var(--color-contrast-lower);
}

.block-editor__file {
    display: flex;
    align-items: center;
    padding: var(--space-xxs);
    background-color: var(--color-white);
    border: 2px solid var(--color-contrast-lower);
    border-radius: var(--radius-md);
    text-decoration: none;
    cursor: pointer;

    &__thumbnail {
        width: 80px;
        height: 80px;
        margin-right: var(--space-sm);
        display: inline-block;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        border: 1px solid var(--color-contrast-lower);
        border-radius: var(--radius-md);
        transition: box-shadow;
        transition-duration: .4s;
        cursor: pointer;

        &:hover {
            box-shadow:inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
        }
    }

    &__description {
        p {
            margin-bottom: var(--space-xxs);
        }
    }
}
</style>
