<template>
    <div class="block-library">
        <ul class="block-library__menu">
            <li
                v-for="(item, index) in menu" :key="index"
                @click="activateMenu(item.category)"
                :class="activeMenu === item.category ? 'menu-item--active' : ''"
                class="menu-item flex _align-middle"
            >
                {{ item.title }}
            </li>
        </ul>
        
        <AppDrawer v-if="activeMenu" @close="activeMenu = false">
            <div class="block-library__list">
                <div class="block-library__column--left">
                    <div class="flex flex-column">
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

const store = useBlockStore()

const onClone = (original) => {
    return {...original, uuid: uuid()}
}

const activeMenu = ref(false)
// const lastActiveMenu = ref(null)
const activateMenu = (category) => {
    // Cache this category
    // lastActiveMenu.value = category

    // Update menu
    activeMenu.value = category

    // Query blocks
    if (category !== 'all') {
        store.indexBlueprints('?category=' + category)
    } else {
        store.indexBlueprints('')
    }
}

const menu = [
    {'title': 'All Blocks', 'category': 'all'},
    {'title': 'Heros', 'category': 'heros'},
    {'title': 'Text', 'category': 'text'},
    {'title': 'Features', 'category': 'features'},
    {'title': 'Cards', 'category': 'cards'},
    {'title': 'Testimonials', 'category': 'testimonials'},
    {'title': 'Accordions', 'category': 'accordions'},
    {'title': 'Galleries', 'category': 'galleries'},
    {'title': 'Details', 'category': 'details'},
    {'title': 'Steps', 'category': 'steps'},
    {'title': 'Tables', 'category': 'tables'},
]
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
