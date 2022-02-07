<template>
    <nav class="menu-builder">
        <ul class="menu-builder__list">
            <MenuBuilderChildren :children="menuStore.menu.children"/>
        </ul>
    </nav>
</template>

<script setup>
import { useMenuStore } from '@/domain/menus/store/useMenuStore'

const route = getCurrentInstance().proxy.$route
const menuStore = useMenuStore()

onMounted(() => {
  menuStore.show(route.params.id) 
})
</script>
