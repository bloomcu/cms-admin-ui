<template>
    <RouterView v-if="ready"/>
</template>

<script setup>
import { useAuthStore } from '@/domain/auth/store/useAuthStore'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const route = getCurrentInstance().proxy.$route
const router = getCurrentInstance().proxy.$router

const authStore = useAuthStore()
const auth = getAuth()

const ready = ref(false)

onAuthStateChanged(auth, (user) => {
  authStore.fetchUser(user)
  
  // Not authenticated
  if (!user && route.name !== 'login') {
    ready.value = true
    router.replace({ name: 'login' })
  }
  
  // Authenticated or logging in
  if (user) {
    ready.value = true
  }
})

onMounted(() => {
  router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired) && !authStore.user) {
      next('/login')
      return;
    }
    next();
  })
})
</script>

<style lang="scss">
@import '@/app/styles/styles.scss';
</style>
