<template>
    <div v-if="store.post" class="outline">
        <Draggable
            :list="store.post.blocks"
            :group="{name: 'outline', pull: false, put: 'blocks'}"
            :animation="200"
            @change="onChange"
        >
            <div v-for="block in store.post.blocks" :key="block.uuid" class="outline__card">
                <div class="outline__card__title">
                    <p class="text-xs">{{ block.title }}</p>
                </div>
                <figure class="outline__card__img">
                    <img :src="'/static/img/' + block.component + '.jpg'" alt="Block Image">
                </figure>
            </div>
        </Draggable>
    </div>
</template>

<script setup>
import Draggable from 'vuedraggable'
import { usePostStore } from '@/domain/posts/store/usePostStore'

const store = usePostStore()

const onChange = () => {
  store.update()
}
</script>

<style lang="scss" scoped>
.outline__list {
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

.outline__card {
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
