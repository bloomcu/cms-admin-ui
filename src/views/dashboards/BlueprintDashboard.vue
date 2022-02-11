<template>
    <LayoutSidebar>
      <div class="flex flex-wrap items-center justify-between margin-bottom-md">
          <h1 class="text-lg">Blueprints</h1>
          <!-- <RouterLink :to="{ name: 'postCreate' }" class="btn btn--primary btn--sm">New Blueprint</RouterLink> -->
      </div>
        
        <div class="app-dashboard">
            <div class="app-dashboard-column--left">
                <AppNestedMenu 
                    :items="categoryStore.category.children" 
                    @selected="filter"
                />
            </div>
            
            <div class="app-dashboard-column--right">
                <ul class="list">
                    <DashboardTable
                        route="postEditor"
                        :items="store.posts"
                        :loading="store.isLoading"
                        @replicate="store.replicate"
                        @destroy="store.destroy"
                    />
                </ul>
            </div>
        </div>
    </LayoutSidebar>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { useCategoryStore } from '@/domain/categories/store/useCategoryStore'

const store = usePostStore()
const categoryStore = useCategoryStore()

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
