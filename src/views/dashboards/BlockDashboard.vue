<template>
    <DashboardLayout>
      <template v-slot:sidebar>
        <AppSidebar/>
      </template>
      
      <div class="flex flex-wrap items-center justify-between margin-bottom-md">
          <h1 class="text-lg">Blocks</h1>
          <RouterLink :to="{ name: 'postCreate' }" class="btn btn--primary btn--sm">New Block</RouterLink>
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
                        :items="store.blocks"
                        :loading="store.isLoading"
                        @replicate="store.replicate"
                        @destroy="store.destroy"
                    />
                </ul>
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup>
import { useBlockStore } from '@/domain/blocks/store/useBlockStore'
import { useCategoryStore } from '@/domain/categories/store/useCategoryStore'

const store = useBlockStore()
const categoryStore = useCategoryStore()

const filter = (id) => {
    store.index({
      'filter[is_blueprint]': 1,
      'filter[categories.id]': id
    })
}

onMounted(() => {
    store.index({
      'filter[is_blueprint]': 1,
    })
    categoryStore.show(79)
})
</script>
