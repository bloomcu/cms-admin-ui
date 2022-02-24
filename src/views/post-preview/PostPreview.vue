<template>
  <div v-if="store.post">
    <!-- Header -->
    <header v-if="store.post" class="editor-header z-index-fixed-element">
        <!-- Left -->
        <div class="editor-header__column">
            <router-link :to="{ name: 'postEditor' }" class="btn btn--sm margin-right-xxs">
                <svg class="icon margin-right-xs" viewBox="0 0 24 24"><g fill="none"><path d="M9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z" fill="#212121"></path></g></svg>
                Back
            </router-link>
        </div>

        <!-- Center -->
        <div class="editor-header__column editor-header__column--center">
            <p class="text-bold text-sm">{{ store.post.title }}</p>
        </div>

        <!-- Right -->
        <div class="editor-header__column editor-header__column--right">
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
    </header>
    
    <!-- Blocks -->
    <Block
        v-for="block in store.post.blocks"
        :key="block.uuid"
        :block="block"
    />
  </div>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'

const store = usePostStore()
const route = getCurrentInstance().proxy.$route

onMounted(() => {    
    store.show(route.params.id)
})
</script>
