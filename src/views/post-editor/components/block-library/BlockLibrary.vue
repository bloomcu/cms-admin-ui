<template>
    <div class="block-library">
        <ul class="block-library__menu">
            <li 
            @click="filter('all')" 
            :class="activeMenu === 'all' ? 'menu-item--active' : ''"
            class="menu-item flex _align-middle"
            >
              All
            </li>
            <li
                v-for="(item, index) in categoryStore.category.children" :key="index"
                @click="filter(item.id)"
                :class="activeMenu === item.id ? 'menu-item--active' : ''"
                class="menu-item flex _align-middle"
            >
                {{ item.title }}
            </li>
        </ul>
        
        <AppDrawer v-if="activeMenu" @close="activeMenu = false">
            <div class="block-library__list">
                <div class="block-library__column--left">
                    <div v-if="store.blocks.length" class="flex flex-column">
                        <Draggable
                            :list="store.blocks"
                            :group="{name: 'blocks', pull: 'clone', put: false}"
                            :sort="false"
                            :clone="onClone"
                            class="block-library__blocks"
                            chosen-class="block-library__blocks--chosen"
                            ghost-class="block-library__blocks--ghost"
                            drag-class="block-library__blocks--drag"
                        >
                            <div v-for="block in store.blocks" :key="block.id" class="block-library__card">
                                <div class="block-library__card-title">
                                    <p class="text-xs">{{ block.title }}</p>
                                </div>
                                <figure class="block-library__card-img">
                                    <img :src="'/static/img/' + block.component + '.jpg'" alt="Block Image">
                                </figure>
                            </div>
                        </Draggable>
                    </div>
                    
                    <div v-else class="padding-sm">
                      <h4>No blocks in this category</h4>
                    </div>
                </div>
                
                <div class="block-library__column--right"></div>
            </div>
        </AppDrawer>
        
    </div>
</template>

<script setup>
import Draggable from 'vuedraggable'
import { v4 as uuid } from 'uuid';
import { useBlockStore } from '@/domain/blocks/store/useBlockStore'
import { useCategoryStore } from '@/domain/categories/store/useCategoryStore'

const store = useBlockStore()
const categoryStore = useCategoryStore()

const onClone = (original) => {
    return {...original, uuid: uuid()}
}

const activeMenu = ref(false)
// const lastActiveMenu = ref(null)

const filter = (id) => {
    // Cache this category
    // lastActiveMenu.value = category
    
    activeMenu.value = id
    
    if (id === 'all') { id = null }

    store.index({
      'filter[is_blueprint]': 1,
      'filter[categories.id]': id
    })
}

onMounted(() => {
    categoryStore.show(79)
})
</script>

<style lang="scss" scoped>
.block-library {
    &__column--left {
        width: 100%;
        margin-right: var(--space-sm);
    }

    &__column--right {
        width: 250px;
    }
}

.block-library__menu {
    position: relative;
    z-index: 2;

    .menu-item {
        font-size: 1.1rem;
        color: var(--color-contrast-higher);
        padding: var(--space-xxs);
        border-radius: var(--radius);
        cursor: pointer;

        &:hover {
            background-color: alpha(var(--color-contrast-higher), 0.05);
        }

        &--active {
            background-color: alpha(var(--color-primary), 0.1);
            color: var(--color-primary);
        }
    }
}

.block-library__list {
    display: flex;
    padding: var(--space-sm);
}

.block-library__blocks {
    &--chosen {
        border: 2px solid var(--color-primary);
    }

    &--ghost {
        border: 2px solid var(--color-primary);
    }

    &--drag {
        border: 2px solid var(--color-primary);
    }
}

.block-library__card {
    margin-bottom: var(--space-xs);
    background-color: var(--color-bg);
    box-shadow: var(--shadow-xs);
    border: 1px solid var(--color-contrast-lower);
    border-radius: var(--radius-md);
    overflow: hidden;
    cursor: pointer;
    
    &:hover {
        box-shadow: var(--shadow-sm);
    }
    
    &-title {
        padding: var(--space-xxs);
        border-bottom: 1px solid var(--color-contrast-lower);
    }
    
    &-img {
        position: relative;
        
        img {
            display: block;
            width: 100%;
        }
    }
}
</style>
