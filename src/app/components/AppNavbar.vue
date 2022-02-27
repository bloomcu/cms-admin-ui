<template>
    <header class="app-header">
        <div class="flex flex-row items-center justify-between gap-md">
            <RouterLink :to="{ name: 'appHome' }">
                <img alt="Vite logo" src="@/app/assets/vite-logo.svg" width="36px" />
            </RouterLink>

            <nav class="flex flex-row flex-center gap-md">
                <a @click.prevent="signUserOut" class="btn btn--sm">Sign out</a>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { useAuthStore } from '@/domain/auth/store/useAuthStore'
import { getAuth, signOut } from "firebase/auth"

const router = getCurrentInstance().proxy.$router
const authStore = useAuthStore()  
const auth = getAuth()

const signUserOut = () => {
  signOut(auth)
    .then(() => {
      router.replace({ name: 'login' })
      // Sign out successfull
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
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
