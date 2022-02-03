<template>
    <div class="block-controls">
        <div class="block-controls__wrapper">
            <!-- Edit -->
            <router-link 
                v-if="confirmDelete === 'hide'" 
                :to="{ name: 'postBlockEditor', params: { uuid: props.uuid } }" 
                @click.native="store.showBlockEditor()"
                class="block-controls__button btn btn--sm btn--primary"
            >
                <svg class="icon margin-right-xs" viewBox="0 0 24 24"><g><path d="M1.915,17.329L1.02,21.804c-0.066,0.328,0.037,0.667,0.273,0.903C1.482,22.896,1.737,23,2,23 c0.065,0,0.131-0.006,0.196-0.02l4.475-0.895L1.915,17.329z"></path><polygon points="13.586,5 11,7.586 3,15.586 8.414,21 19,10.414 "></polygon><path d="M22.707,5.293l-4-4c-0.391-0.391-1.023-0.391-1.414,0L15,3.586L20.414,9l2.293-2.293 C23.098,6.316,23.098,5.684,22.707,5.293z"></path></g></svg>
                Edit Block
            </router-link>
            
            <!-- <button v-if="confirmDelete === 'hide'" @click="store.showBlockEditor(uuid)" class="block-controls__button btn btn--sm btn--primary">
                <svg class="icon margin-right-xs" viewBox="0 0 24 24"><g><path d="M1.915,17.329L1.02,21.804c-0.066,0.328,0.037,0.667,0.273,0.903C1.482,22.896,1.737,23,2,23 c0.065,0,0.131-0.006,0.196-0.02l4.475-0.895L1.915,17.329z"></path><polygon points="13.586,5 11,7.586 3,15.586 8.414,21 19,10.414 "></polygon><path d="M22.707,5.293l-4-4c-0.391-0.391-1.023-0.391-1.414,0L15,3.586L20.414,9l2.293-2.293 C23.098,6.316,23.098,5.684,22.707,5.293z"></path></g></svg>
                Edit Block
            </button> -->

            <!-- Replicate -->
            <button v-if="confirmDelete === 'hide'" class="block-controls__button btn btn--sm btn--primary">
                <svg class="icon" viewBox="0 0 24 24"><g><path data-color="color-2" d="M22,7h-3v11c0,0.552-0.448,1-1,1H7v3c0,0.552,0.448,1,1,1h14c0.552,0,1-0.448,1-1V8 C23,7.448,22.552,7,22,7z"></path><path d="M16,17H2c-0.553,0-1-0.447-1-1V2c0-0.552,0.447-1,1-1h14c0.553,0,1,0.448,1,1v14C17,16.553,16.553,17,16,17z"></path></g></svg>
            </button>

            <!-- Delete -->
            <button v-if="confirmDelete === 'hide'" @click="confirmDelete = 'show'" class="block-controls__button btn btn--sm btn--primary">
                <svg class="icon" viewBox="0 0 24 24"><g><path d="M3.87,21.214A3.01,3.01,0,0,0,6.862,24H17.138a3.01,3.01,0,0,0,2.992-2.786L21.074,8H2.926Z"></path><path d="M23,4H17V1a1,1,0,0,0-1-1H8A1,1,0,0,0,7,1V4H1A1,1,0,0,0,1,6H23a1,1,0,0,0,0-2ZM9,2h6V4H9Z"></path></g></svg>
            </button>

            <div v-else>
                <!-- Cancel Delete -->
                <button @click="confirmDelete = 'hide'" class="block-controls__button btn btn--sm bg border">
                    Cancel
                </button>

                <!-- Confirm Delete -->
                <button class="block-controls__button btn btn--sm btn--accent">
                    Confirm Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePostEditorStore } from '@/views/post-editor/store/usePostEditorStore'

const props = defineProps({
    uuid: { type: String, required: true }
})

const store = usePostEditorStore()
const confirmDelete = ref('hide')

// const editBlock = () => {
//     store.showBlockEditor()
//     router.push({ name: 'postBlockEditor', params: { uuid: props.uuid } })    
// }
</script>

<style lang="scss">
.block-controls {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    cursor: move;

    &:hover {
        .block-controls__wrapper {
            opacity: 1;
        }
    }
}

.block-controls__wrapper {
    display: flex;
    justify-content: flex-end;
    padding: var(--space-xs);
    opacity: 0;
    transition: opacity 0.2s;
}

.block-controls__button {
	box-shadow: var(--shadow-sm);
    margin-left: var(--space-xxs);
    padding: var(--space-xs);

    &:hover {
        box-shadow: var(--shadow-md);
    }
}
</style>
