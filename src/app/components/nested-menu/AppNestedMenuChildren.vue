<template>
    <div>
        <li
            v-for="(item, index) in items" :key="index"
            :class="toggled(item.id) ? 'nested-menu__item--expanded' : ''"
            class="nested-menu__item"
        >
            <a @click.prevent="select(item.id)" :class="selected == item.id ? 'nested-menu__link--current' : ''" class="nested-menu__link" href="">
                <span class="nested-menu__text">{{ item.title }}</span>
            </a>

            <!-- Arrow -->
            <button v-if="item.children.length" @click="toggle(item.id)" class="reset nested-menu__sublist-control">
                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <!-- Recursive children -->
            <ul v-if="item.children.length" class="nested-menu__list">
                <AppNestedMenuChildren
                    :items="item.children"
                    :selected="selected"
                    @selected="select"
                />
            </ul>
        </li>
    </div>
</template>

<script>
export default {
    name: 'AppNestedMenuChildren'
}
</script>

<script setup>
// TODO: Implement loading ghost
// import LoadingGhost from '@/components/loading/LoadingGhost.vue'

import useToggleMultiple from '@/app/composables/useToggleMultiple.js'

const props = defineProps({
    items: { type: Array },
    selected: ''
})

const { toggle, toggled } = useToggleMultiple()

const select = (id) => {
    emit('selected', id)
}

const emit = defineEmits(['selected'])
</script>
