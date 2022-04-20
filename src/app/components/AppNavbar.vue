<template>
    <header class="app-header">
        <div class="flex flex-row items-center justify-between gap-md">
            <RouterLink :to="{ name: 'appHome' }">
                <img alt="Vite logo" src="@/app/assets/vite-logo.svg" width="36px" />
            </RouterLink>

            <nav class="flex flex-row flex-center gap-md">
                <a @click.prevent="logout()" class="btn btn--sm">Logout</a>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { useAuthStore } from '@/domain/auth/store/useAuthStore'

const router = getCurrentInstance().proxy.$router
const authStore = useAuthStore()  

const logout = async () => {
  authStore.logout().then(() => {
    window.location.replace('/login')
  })
}
</script>

<style lang="scss">
.app-header {
    padding: var(--space-xxs) var(--space-md);
    background-color: var(--color-white);
    box-shadow: var(--shadow-xs);
}
</style>
