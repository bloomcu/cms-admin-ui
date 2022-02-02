<template>
    <draggable 
        :list="children" 
        :animation="200" 
        :group="{ name: 'menu-builder' }"
    >
        <!-- Child -->
        <li
            v-for="(item, index) in children" 
            :key="index"
            :class="toggled(item.id) ? 'menu-builder__item--expanded' : ''"
            class="menu-builder__item"
        >
            <div @click="toggle(item.id)" class="menu-builder__link">
                <span class="menu-builder__text">{{ item.title }}</span>
            </div>

            <!-- Arrow -->
            <button v-if="item.children" class="reset menu-builder__sublist-control">
                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <!-- Recursive children -->
            <ul v-if="item.children" class="menu-builder__list">
                <MenuBuilderChildren :children="item.children"/>
            </ul>
        </li>
    </draggable>
</template>

<script>
export default {
    name: 'MenuBuilderChildren'
}
</script>

<script setup>
import draggable from 'vuedraggable'
import useToggleMultiple from '@/app/composables/useToggleMultiple.js'

const props = defineProps({ 
    children: { type: Array }
})

const { toggle, toggled } = useToggleMultiple()
</script>
