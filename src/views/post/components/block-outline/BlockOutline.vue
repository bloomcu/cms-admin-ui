<template>
    <div class="block-outline">
        <!-- <draggable
            v-if="page"
            v-model="page.layout.blocks"
            :group="{ name: 'outline', pull: false, put: 'blocks' }"
            :animation="400"
            @change="change"
            class="block-outline__list"
            chosen-class="block-outline__list--chosen"
            ghost-class="block-outline__list--ghost"
            drag-class="block-outline__list--drag"
        >
            <transition-group type="transition" name="thumbnail">
                <div
                    v-for="block in page.layout.blocks"
                    :key="block.uuid"
                    @click="scrollToElement(block.uuid)"
                    class="block-outline__card"
                >
                    <div class="block-outline__card__title">
                        <p class="text-xs">{{ block.title }}</p>
                    </div>
                    <figure class="block-outline__card__img">
                        <img :src="'/images/blocks/' + block.component + '.jpg'" alt="Block Image">
                    </figure>
                </div>
            </transition-group>
        </draggable> -->
        
        <div
            v-if="store.post.layout"
            class="block-outline__list"
        >
            <div
                v-for="block in store.post.layout.blocks"
                :key="block.uuid"
                class="block-outline__card"
            >
                <div class="block-outline__card__title">
                    <p class="text-xs">{{ block.title }}</p>
                </div>
                <figure class="block-outline__card__img">
                    <img :src="'/images/blocks/' + block.component + '.jpg'" alt="Block Image">
                </figure>
            </div>
        </div>
    </div>
</template>

<script setup>
import { postStore } from '@/domain/posts/store/postStore'

const store = postStore()
</script>

<style lang="scss" scoped>
.block-outline__list {
    // Block clicked
    &--chosen {
        border: 2px solid var(--color-primary);
    }

    // Block ghost
    &--ghost {
        border: 2px solid var(--color-primary);
    }

    // Block dragging
    &--drag {
        border: 2px solid var(--color-primary);
    }
}

.block-outline__card {
    margin-bottom: var(--space-xs);
    background-color: var(--color-bg);
    box-shadow: var(--shadow-xs);
    border-radius: var(--radius-md);
    overflow: hidden;
    cursor: pointer;

    &:hover {
        box-shadow: var(--shadow-sm);
    }
    
    &__title {
        padding: var(--space-xxs);
        border-bottom: 1px solid var(--color-contrast-lower);
    }

    &__img {
        position: relative;

        img {
            display: block;
            width: 100%;
        }
    }
}
</style>
