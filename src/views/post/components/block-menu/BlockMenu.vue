<template>
    <div class="block-menu">
        <ul>
            <li
                v-for="(item, index) in menu" :key="index"
                @click="activateMenu(item.category)"
                :class="activeMenu === item.category ? 'menu-item--active' : ''"
                class="menu-item flex _align-middle"
            >
                {{ item.title }}
                <span v-if="item.count" class="counter counter--dark margin-left-xs">{{ item.count }}</span>
            </li>
        </ul>
        
        <!-- <app-drawer :open="activeMenu !== null" @close="activeMenu = null" >
            <blocks-list :blocks="blocks" @event-dragstart="activeMenu = null" @event-dragend="activeMenu = lastActiveMenu"/>
        </app-drawer> -->
    </div>
</template>

<script setup>
const activeMenu = ref(null)
// const lastActiveMenu = ref(null)

function activateMenu(cat) {
    // Cache this category
    // lastActiveMenu.value = cat

    // Lock body scroll
    document.body.classList.add('utility__lock-scroll')

    // Update menu
    activeMenu.value = cat

    // Query blocks
    if (cat !== 'all') {
        getBlocks('?category=' + cat)
    } else {
        getBlocks('')
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
.block-menu {
    position: relative;
    z-index: 6;

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
</style>
