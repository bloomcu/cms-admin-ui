<template>
    <header class="app-header">
        <div class="flex flex-row items-center gap-md">
            <RouterLink :to="{ name: 'appHome' }">
                <img alt="Vite logo" src="@/app/assets/vite-logo.svg" width="36px" />
            </RouterLink>

            <!-- <nav class="flex flex-row flex-center items-center gap-md">
                <RouterLink
                    v-for="(route, index) in menu"
                    :key="index"
                    :to="{ name: route.name }"
                >
                    {{ route.title }}
                </RouterLink>
            </nav> -->
        </div>
    </header>
</template>

<style lang="scss">
.app-header {
    padding: var(--space-xxs) var(--space-md);
    background-color: var(--color-white);
    box-shadow: var(--shadow-xs);
}
</style>
