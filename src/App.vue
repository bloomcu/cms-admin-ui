<template>
    <RouterView/>
</template>

<script setup>
import { useAuthStore } from '@/domain/auth/store/useAuthStore'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = getCurrentInstance().proxy.$router
const authStore = useAuthStore()
const auth = getAuth()

onAuthStateChanged(auth, (user) => {
  authStore.fetchUser(user)
})

onMounted(() => {
  if (!authStore.loggedIn) {
    router.replace({ name: 'login' })
  }
})
</script>

<style lang="scss">
@import '@/app/styles/styles.scss';
</style>
