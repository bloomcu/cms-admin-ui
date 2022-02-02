<template>
    <div class="editor">
        <header class="editor-header">
            <!-- Left -->
            <div class="editor-header__column">
                <router-link :to="{ name: 'menuDashboard' }" class="btn btn--sm margin-right-xxs">
                    <svg class="icon margin-right-xs" viewBox="0 0 24 24"><g fill="none"><path d="M9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z" fill="#212121"></path></g></svg>
                    Back
                </router-link>
                
                <button class="btn btn--sm margin-right-xs">Settings</button>
            </div>

            <!-- Status -->
            <div class="editor-header__column editor-header__column--center">
                <p class="text-bold">{{ store.menu.title }}</p>
            </div>

            <!-- Controls -->
            <div class="editor-header__column editor-header__column--right">
                <span class="text-xs flex items-center">
                    <div class="status-dot status-dot--primary margin-right-xxxs"></div>
                    Draft
                </span>
                <router-link :to="{name: 'postPreview'}" class="btn btn--sm btn--primary margin-left-sm">Publish</router-link>
                <router-link :to="{name: 'postPreview'}" class="btn btn--sm margin-left-xxs">Preview</router-link>
            </div>
        </header>
        
        <div v-if="store" class="editor-wrapper">
            <!-- Left -->
            <div class="editor-wrapper__left app-scrollable">
                <AppNestedMenu 
                    :items="categoryStore.category.children" 
                    @selected="filter"
                />
            </div>

            <!-- Center -->
            <main class="editor-wrapper__center app-scrollable">
                <draggable
                    :list="postStore.posts"
                    :group="{ name: 'menu-builder', pull: 'clone', put: false }"
                    :sort="false"
                >
                    <div v-for="(post, index) in postStore.posts" :key="index" class="flex justify-between bg shadow-xs radius-md padding-xs margin-bottom-xxs" style="cursor: move;">
                        <p class="text-sm">{{ post.title }}</p>
                        <div class="item__dot margin-left-sm" aria-hidden="true"></div>
                    </div>
                </draggable>
            </main>

            <!-- Right -->
            <div class="editor-wrapper__right app-scrollable">
                <MenuBuilder :menu="store.menu"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { useMenuStore } from '@/domain/menus/store/useMenuStore'
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { useCategoryStore } from '@/domain/categories/store/useCategoryStore'

const route = getCurrentInstance().proxy.$route
const store = useMenuStore()
const postStore = usePostStore()
const categoryStore = useCategoryStore()

const filter = () => {
    // TODO: Hit post api again passing filter params
    console.log('Filtering...')
}

onMounted(() => {
    store.show(route.params.id)
    categoryStore.show(1)
    postStore.index('pages')
})
</script>

<!-- TODO: These editor classes may need to be abstracted
because the post and block editors will share many of them -->
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
    width: 18%;
    padding-right: var(--space-md);
}

.editor-wrapper__center {
    width: 24%;
    margin-right: var(--space-sm);

    // Flexbox
    display: flex;
    flex-direction: column;

    // Style
    // background-color: var(--color-white);
    // border-radius: var(--radius-md);
    // box-shadow: var(--shadow-sm);
}

.editor-wrapper__right {
    width: 58%;
    padding-left: var(--space-xs);
    
    // Style
    // background-color: var(--color-white);
    // border-radius: var(--radius-md);
    // box-shadow: var(--shadow-sm);
}
</style>
