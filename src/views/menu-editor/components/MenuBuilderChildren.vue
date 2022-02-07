<template>
    <Draggable 
        v-if="children"
        :list="children" 
        :animation="200" 
        :group="{ name: 'menu-builder' }"
        :class="children.length ? '' : 'height-xl bg bg-contrast-lower bg-opacity-50% radius-md'"
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
            <ul v-if="item.children" class="menu-builder__list menu-builder__children">
                <MenuBuilderChildren :children="item.children"/>
            </ul>
        </li>
    </Draggable>
</template>

<script>
export default {
    name: 'MenuBuilderChildren'
}
</script>

<script setup>
import Draggable from 'vuedraggable'
import useToggleMultiple from '@/app/composables/useToggleMultiple.js'

const props = defineProps({ 
    children: { type: Array }
})

const { toggle, toggled } = useToggleMultiple()
</script>

<style lang="scss">
:root {
    // List items
    // Height of each list item (navigation links)
    --menu-builder-list-item-height: 60px;
    
    // Item horizontal padding
    --menu-builder-list-item-padding-x: var(--space-sm);

    // Sublist Control Arrow
    // Button size
    --menu-builder-sublist-control-size: 60px;
    
    // Icon size
    --menu-builder-sublist-control-icon-size: 22px;
}

// Children
.menu-builder__list .menu-builder__list {
    display: none; // hide children

    // Child item
    .menu-builder__item {
        padding-left: var(--menu-builder-list-item-padding-x);
    }
}

.menu-builder__item {
    position: relative;
    background-color: var(--color-white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    margin-bottom: var(--space-xxs);
    padding: 0 var(--menu-builder-list-item-padding-x);
}

.menu-builder__item--expanded > .menu-builder__list {
    display: block;
}

.menu-builder__item--expanded > .menu-builder__sublist-control .icon {
    transform: rotate(90deg);
}

.menu-builder__children {
  padding: 0 0 var(--space-sm) 0;
}  

.menu-builder__link {
    display: flex;
    align-items: center;
    height: var(--menu-builder-list-item-height);
    margin-bottom: var(--space-xxs);
    text-decoration: none;
    transition: .1s;
    cursor: pointer;
}

// Labels
.menu-builder__text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: var(--space-xxs);
}

// Arrow
.menu-builder__sublist-control {
    display: block;
    width: var(--menu-builder-sublist-control-size);
    height: var(--menu-builder-sublist-control-size);
    border-radius: var(--radius-md) !important;
    position: absolute;
    right: 0;
    top: 0;
    transition: .1s;
    cursor: pointer;

    .icon {
        display: block;
        fill: none;
        width: var(--menu-builder-sublist-control-icon-size);
        height: var(--menu-builder-sublist-control-icon-size);
        margin: auto;
        transition: transform .2s;
    }

    &:hover {
        background-color: alpha(var(--color-contrast-medium), 0.15);
    }

    &:focus {
        outline: none;
    }
}
</style>
