<template>
    <LayoutSidebar>
        <div class="margin-bottom-md">
            <h1 class="text-lg">Blueprints</h1>
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

const filter = () => {
    // TODO: Hit post api again passing filter params
    console.log('Filtering...')
}

onMounted(() => {
    store.indexBlueprints()
    categoryStore.show(1)
})
</script>
