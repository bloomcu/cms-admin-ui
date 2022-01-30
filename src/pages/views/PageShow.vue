<template>
    <div>
        <div class="margin-bottom-md">
            <h1 class="text-md">{{ store.page.title }}</h1>
        </div>
        
        <div class="margin-bottom-md">
            <p>Slug: {{ store.page.slug }}</p>
        </div>
        
        <div class="margin-bottom-md">
            <button @click="destroy()" class="btn">Delete</button>
        </div>
        
        <div class="margin-bottom-md">
            <button @click="store.isShowingSettings = true" class="btn">Settings</button>
            <PageSettingsModal />
        </div>
    </div>
</template>

<script setup>
import { usePagesStore } from '@/pages/store/pageStore'

const router = getCurrentInstance().proxy.$router
const route = getCurrentInstance().proxy.$route
const store = usePagesStore()

onMounted(() => {    
    store.show(route.params.page)
})

const destroy = () => {
    store.destroy(route.params.page)
    router.push({ name: 'pageIndex' })
}
</script>

<style lang="scss" scoped>
/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* fade-y */
.fade-y-enter,
.fade-y-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-y-enter-active,
.fade-y-leave-active {
  transition: opacity 0.3s, transform 0.5s;
}
</style>
