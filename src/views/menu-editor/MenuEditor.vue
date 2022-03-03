<template>
    <div class="menu-editor">
        <header class="editor-header">
            <!-- Left -->
            <div class="editor-header__column">
                <router-link :to="{ name: 'menuDashboard' }" class="btn btn--sm margin-right-xxs">
                    <svg class="icon margin-right-xs" viewBox="0 0 24 24"><g fill="none"><path d="M9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z" fill="#212121"></path></g></svg>
                    Back
                </router-link>
                
                <!-- <button class="btn btn--sm margin-right-xs">Settings</button> -->
            </div>

            <!-- Status -->
            <div class="editor-header__column editor-header__column--center">
                <p class="text-bold">{{ menuStore.menu.title }}</p>
            </div>

            <!-- Controls -->
            <div class="editor-header__column editor-header__column--right">
                <span class="text-xs flex items-center">
                    <div class="status-dot status-dot--success margin-right-xxxs"></div>
                    Published
                </span>
                <button @click="menuStore.update()" class="btn btn--sm btn--primary margin-left-sm">Save</button>
                <!-- <router-link :to="{name: 'postPreview'}" class="btn btn--sm margin-left-xxs">Preview</router-link> -->
            </div>
        </header>
        
        <div class="menu-editor-wrapper">
            <!-- Left -->
            <div class="menu-editor-wrapper__left app-scrollable">
                <AppRadioSwitch @selected="filterPostType" class="margin-bottom-xs"/>
                <AppNestedMenu 
                    :items="categoryStore.category.children" 
                    @selected="filterCategory"
                />
            </div>

            <!-- Center -->
            <main class="menu-editor-wrapper__center app-scrollable">
              <!-- Deleted -->
              <div class="bg bg-contrast-lower bg-opacity-50% text-center padding-x-sm radius-md margin-bottom-sm">
                <!-- <p class="text-sm color-contrast-low">Trash</p> -->
                <Draggable
                    :list="deleted"
                    :group="{ name: 'menu-builder' }"
                    class="menu-editor__trash"
                />
              </div>
              
              <!-- Pages -->
                <Draggable
                    :list="postStore.posts"
                    :group="{ name: 'menu-builder', pull: 'clone', put: false }"
                    :sort="false"
                    :clone="onClone"
                >
                    <div v-for="(post, index) in postStore.posts" :key="index" class="flex justify-between bg shadow-xs radius-md padding-xs margin-bottom-xxs" style="cursor: move;">
                        <p class="text-sm">{{ post.title }}</p>
                        <div class="item__dot margin-left-sm" aria-hidden="true"></div>
                    </div>
                </Draggable>
            </main>

            <!-- Right -->
            <div v-if="menuStore.menu" class="menu-editor-wrapper__right app-scrollable">
                <MenuBuilder/>
            </div>
        </div>
    </div>
</template>

<script setup>
import Draggable from 'vuedraggable'
import { useMenuStore } from '@/domain/menus/store/useMenuStore'
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { useCategoryStore } from '@/domain/categories/store/useCategoryStore'

const route = getCurrentInstance().proxy.$route
const menuStore = useMenuStore()
const postStore = usePostStore()
const categoryStore = useCategoryStore()

const deleted = ref([])

const onClone = (original) => {
    return {
      title: original.title,
      component: 'menu-link',
      data: {
        type: 'internal',
        post_id: original.id,
        text: original.title,
      },
      children: [],
    }
}

const selectedPostType = ref('page')

const filterPostType = (type) => {
  selectedPostType.value = type
  
  if (type == 'page') categoryStore.show(1)
  else categoryStore.show(72)
  
  postStore.index({
    'filter[type]': type,
    'filter[is_blueprint]': 0,
  })
}

const filterCategory = (id) => {
    postStore.index({
      'filter[type]': selectedPostType.value,
      'filter[is_blueprint]': 0,
      'filter[categories.id]': id
    })
}

onMounted(() => {
    categoryStore.show(1)
    postStore.index({
      'filter[type]': 'page',
      'filter[is_blueprint]': 0,
    })
})
</script>

<!-- TODO: These menu-editor classes may need to be abstracted
because the post and block menu-editors will share many of them -->
<style lang="scss">
.menu-editor {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #f4f3f6; // TODO: Replace with var
}

.menu-editor-wrapper {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    margin: var(--space-sm) var(--space-md);
    min-height: 0;
}

.menu-editor-wrapper__left {
    width: 18%;
    padding-right: var(--space-md);
}

.menu-editor-wrapper__center {
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

.menu-editor-wrapper__right {
    width: 58%;
    padding-left: var(--space-xs);
    
    // Style
    // background-color: var(--color-white);
    // border-radius: var(--radius-md);
    // box-shadow: var(--shadow-sm);
}

.menu-editor__trash {
  list-style: none;
  padding: 20px 0;
  padding: var(--space-sm) 0;
  
  &:before {
    content: 'Trash';
    white-space: pre;
    font-size: var(--text-sm);
    color: var(--color-contrast-low);
  }
}
</style>
