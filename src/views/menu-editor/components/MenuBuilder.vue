<template>
    <nav class="menu-builder">
        <ul class="menu-builder__list">
            <MenuBuilderChildren :children="menu.children"/>
        </ul>
    </nav>
</template>

<script setup>
const props = defineProps({ 
    menu: { type: Object }
})
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
}

.menu-builder__item--expanded > .menu-builder__list {
    display: block;
}

.menu-builder__item--expanded > .menu-builder__sublist-control .icon {
    transform: rotate(90deg);
}

.menu-builder__link {
    display: flex;
    align-items: center;
    height: var(--menu-builder-list-item-height);
    margin-bottom: var(--space-xxs);
    padding-left: var(--menu-builder-list-item-padding-x);
    text-decoration: none;
    transition: .1s;
    cursor: pointer;
    
    // Style
    color: var(--color-contrast-high);
    background-color: var(--color-white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
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
