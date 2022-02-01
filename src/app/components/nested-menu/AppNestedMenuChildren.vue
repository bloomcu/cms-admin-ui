<template>
    <!-- Options -->
    <li
        v-for="(item, index) in items" :key="index"
        :class="openId == item.id ? 'nested-menu__item--expanded' : ''"
        class="nested-menu__item"
    >
        <a
            @click.prevent="$emit('selected', item)"
            :class="selected == item ? 'nested-menu__link--current' : ''"
            class="nested-menu__link"
            href=""
        >
            <span class="nested-menu__text">{{ item.title }}</span>
        </a>

        <!-- Arrow -->
        <button
            v-if="item.children.length"
            @click="toggle(item)"
            class="reset nested-menu__sublist-control"
        >
            <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>

        <!-- Children -->
        <ul v-if="item.children.length" class="nested-menu__list">
            <AppNestedMenuChildren
                :items="item.children"
                :selected="selected"
                @selected="$emit('selected', item)"
            />
        </ul>
    </li>
</template>

<script setup>
const props = defineProps({ 
    items: { type: Array },
    selected: { type: Object }
})

const emit = defineEmits(['selected'])

const [value, toggle] = useToggle()
// const { openId, handleOpen } = useToggleOpen()
    
// Emit item up to parent
// function handleItemSelected(item) {
//     emit('item-selected', item)
// }
</script>
