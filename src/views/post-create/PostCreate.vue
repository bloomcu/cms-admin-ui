<template>
  <LayoutDefault>
    <div class="flex flex-wrap items-center justify-between margin-bottom-md">
        <h1 class="text-lg">Select a Blueprint</h1>
        <a @click="back()" class="btn btn--primary btn--sm">Cancel</a>
    </div>
    
    <div class="app-dashboard">
        <div class="app-dashboard-column--left">
            <AppNestedMenu 
                :items="categoryStore.category.children" 
                @selected="filter"
            />
        </div>
        
        <div class="app-dashboard-column--right">
          <h4 v-if="store.isLoading">Loading...</h4>
          <div v-else class="grid gap-md">
            <AppCard
              v-for="(blueprint, index) in store.posts"
              :key="index"
              :title="blueprint.title"
              @onPreview="modalOpen = true"
              @onSelect="replicate(blueprint.id)"
              class="col-4@md"
            />
        </div>
        </div>
    </div>
  </LayoutDefault>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { useCategoryStore } from '@/domain/categories/store/useCategoryStore'

const store = usePostStore()
const categoryStore = useCategoryStore()
const router = getCurrentInstance().proxy.$router

const replicate = (id) => {
  store.replicate(id)
  setTimeout(() => {
      router.push({ name: 'postEditor', params: { id: store.post.id } })
  }, 700)
}

const back = () => {
  router.go(-1)
}

const modalOpen = ref(false)

const filter = (id) => {
  store.index({
    'filter[is_blueprint]': 1,
    'filter[categories.id]': id
  })
}

onMounted(() => {
    store.index({ 
      'filter[is_blueprint]': 1
    })
    categoryStore.show(1)
})
</script>
