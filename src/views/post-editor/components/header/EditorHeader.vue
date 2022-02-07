<template>
    <header class="editor-header">
        <!-- Left -->
        <div class="editor-header__column">
            <router-link @click.native="editor.showDefault()" v-if="store.post.type" :to="{ name: `${store.post.type}Dashboard` }" class="btn btn--sm margin-right-xxs">
                <svg class="icon margin-right-xs" viewBox="0 0 24 24"><g fill="none"><path d="M9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z" fill="#212121"></path></g></svg>
                Back
            </router-link>
            
            <button @click="store.isShowingSettings = true" class="btn btn--sm">Settings</button>
        </div>

        <!-- Status -->
        <div class="editor-header__column editor-header__column--center">
            <p class="text-bold">{{ store.post.title }}</p>
        </div>

        <!-- Controls -->
        <div class="editor-header__column editor-header__column--right">
            <span v-if="store.isLoading" class="text-xs flex items-center">
                <div class="status-dot status-dot--primary margin-right-xxxs"></div>
                Saving
            </span>

            <!-- <span v-else class="text-xs flex items-center">
                <div class="status-dot status-dot--success margin-right-xxxs"></div>
                Published
            </span> -->
            
            <span v-else class="text-xs flex items-center">
                <div class="status-dot status-dot--primary margin-right-xxxs"></div>
                Draft
            </span>
            <router-link :to="{name: 'postPreview'}" class="btn btn--sm btn--primary margin-left-sm">Publish</router-link>
            <router-link @click.native="editor.showDefault()" :to="{name: 'postPreview'}" class="btn btn--sm margin-left-xxs">Preview</router-link>
        </div>
    </header>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { usePostEditorStore } from '@/views/post-editor/store/usePostEditorStore'

const store = usePostStore()
const editor = usePostEditorStore()
</script>

<style lang="scss">
.editor-header {
    top: 0;
    position: sticky;
    min-height: 58px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 var(--space-md);
    background-color: var(--color-white);
    box-shadow: var(--shadow-xs);
}

.editor-header__column {
    display: flex;
    align-items: center;
    width: calc(100% / 3);

    &--center {
        justify-content: center;
    }

    &--right {
        justify-content: flex-end;
    }
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    align-self: center;
    flex-shrink: 0;
}

.status-dot--primary {
    background-color: var(--color-primary);
}

.status-dot--success {
    background-color: var(--color-success);
}
</style>
