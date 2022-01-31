<template>
    <div>
        <div class="margin-bottom-md">
            <h1 class="text-md">{{ store.post.title }}</h1>
        </div>
        
        <div class="margin-bottom-md">
            <p>Slug: {{ store.post.slug }}</p>
        </div>
        
        <div class="margin-bottom-md">
            <button @click="destroy()" class="btn">Delete</button>
        </div>
        
        <div class="margin-bottom-md">
            <button @click="store.isShowingSettings = true" class="btn">Settings</button>
            <PostSettingsModal />
        </div>
    </div>
</template>

<script setup>
import { postStore } from '@/posts/store/postStore'

const store = postStore()
const router = getCurrentInstance().proxy.$router
const route = getCurrentInstance().proxy.$route

onMounted(() => {    
    store.show(route.params.post)
})

const destroy = () => {
    store.destroy(route.params.post)
    router.push({ name: `${store.post.type}Index` })
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
