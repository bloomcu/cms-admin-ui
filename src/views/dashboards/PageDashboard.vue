<template>
    <DashboardLayout>
        <template v-slot:sidebar>
          <AppSidebar/>
        </template>
      
        <div class="flex flex-wrap items-center justify-between margin-bottom-md">
            <h1 class="text-lg">Pages</h1>
            <RouterLink :to="{ name: 'postCreate' }" class="btn btn--primary btn--sm">New Page</RouterLink>
        </div>
        
        <div class="app-dashboard">
            <div class="app-dashboard-column--left">
                <AppNestedMenu 
                    :items="categoryStore.category.children" 
                    @selected="filter"
                />
            </div>
            
            <div class="app-dashboard-column--right">
                <DashboardTable 
                    route="postEditor"
                    :items="store.posts"
                    :loading="store.isLoading"
                    @replicate="store.replicate"
                    @destroy="store.destroy"
                />
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { useCategoryStore } from '@/domain/categories/store/useCategoryStore'

const store = usePostStore()
const categoryStore = useCategoryStore()

const filter = (id) => {
    store.index({
      'filter[is_blueprint]': 0,
      'filter[type]': 'page',
      'filter[categories.id]': id
    })
}

onMounted(() => {
    store.index({
      'filter[is_blueprint]': 0,
      'filter[type]': 'page',
    })
    categoryStore.show(1)
})
</script>
