<template>
    <header v-if="store.post" class="editor-header">
        <!-- Left -->
        <div class="editor-header__column">
            <router-link v-if="store.post.type" :to="{ name: `${store.post.type}Dashboard` }" @click.native="editor.showDefault()" class="btn btn--sm margin-right-xxs">
                <svg class="icon margin-right-xs" viewBox="0 0 24 24"><g fill="none"><path d="M9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z" fill="#212121"></path></g></svg>
                Back
            </router-link>
            
            <button @click="store.isShowingSettings = true" class="btn btn--sm margin-right-xxs">Settings</button>
            
            <!-- Saving / Statuses -->
            <!-- TODO: Show All changes saved after saving finished. See google doc -->
            <div v-if="store.isLoading" >
              <span class="text-xs flex items-center margin-right-sm">
                  <div class="status-dot status-dot--success margin-right-xxxs"></div>
                  Saving
              </span>
            </div>
            <div v-else>
              <span v-if="store.post.published && store.post.has_changes" class="text-xs flex items-center">
                  <div class="status-dot status-dot--orange margin-right-xxxs"></div>
                  Unpublished Changes
              </span>
              <span v-if="store.post.published && !store.post.has_changes" class="text-xs flex items-center">
                  <div class="status-dot status-dot--success margin-right-xxxs"></div>
                  Published
              </span>
              <span v-if="!store.post.published" class="text-xs flex items-center">
                  <div class="status-dot margin-right-xxxs"></div>
                  Unpublished
              </span>
            </div>
        </div>

        <!-- Center -->
        <div class="editor-header__column editor-header__column--center">
            <p class="text-bold text-sm">{{ store.post.title }}</p>
        </div>

        <!-- Right -->
        <div class="editor-header__column editor-header__column--right">
            <!-- Publish / Publish Changes -->
            <button 
              v-if="!store.post.published" 
              @click="store.publish()"
              class="btn btn--primary btn--sm margin-left-xxs"
            >
              Publish
            </button>
            <button 
              v-if="store.post.published" 
              @click="store.publish()" 
              class="btn btn--primary btn--sm margin-left-xxs"
              :class="{ 'app-disabled': !store.post.has_changes }"
            >
              Publish Changes
            </button>
            
            <!-- Unpublish -->
            <!-- TODO: Move this to an elipses -->
            <!-- <button v-if="store.post.published_at && !store.isDirty" @click="store.unpublish()" class="btn btn--primary btn--sm margin-left-xxs">Unpublish</button> -->
            
            <!-- Preview / View Page -->
            <RouterLink 
              :to="{ name: 'postPreview' }" 
              @click.native="editor.showDefault()"
              class="btn btn--primary btn--sm margin-left-xxs"
            >
              Preview
            </RouterLink>
            <a 
              :href="`${clientSiteUrl}/${store.post.url}`" 
              :class="{ 'app-disabled': !store.post.published }"
              class="btn btn--primary btn--sm margin-left-xxs"
              target="_blank" 
            >
              View Page
            </a>
        </div>
    </header>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { usePostEditorStore } from '@/views/post-editor/store/usePostEditorStore'

// import dayjs from 'dayjs'
// import relativeTime from 'dayjs/plugin/relativeTime'
// dayjs.extend(relativeTime)

const store = usePostStore()
const editor = usePostEditorStore()
const clientSiteUrl = import.meta.env.VITE_CLIENT_SITE_URL
</script>

<style lang="scss">
.editor-header {
    top: 0;
    position: sticky;
    min-height: 58px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 var(--space-sm);
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
    background-color: alpha(var(--color-contrast-higher), 0.2);
}

.status-dot--primary {
    background-color: var(--color-primary);
}

.status-dot--success {
    background-color: var(--color-success);
}

.status-dot--orange {
    background-color: orange;
}
</style>
