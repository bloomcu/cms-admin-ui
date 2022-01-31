<template>
    <header class="margin-bottom-md">
        <div class="flex flex-row items-center gap-md">
            <RouterLink :to="{ name: 'appHome' }">
                <img alt="Vite logo" src="@/app/assets/vite-logo.svg" width="36px" />
            </RouterLink>

            <nav class="flex flex-row flex-center items-center gap-md">
                <RouterLink
                    v-for="(route, index) in menu"
                    :key="index"
                    :to="{ name: route.name }"
                >
                    {{ route.title }}
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<script setup>
const menu = [
    { title: 'Pages', name: 'pageIndex' },
    { title: 'Articles', name: 'articleIndex' },
]
</script>
