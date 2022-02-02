<template>
    <LayoutSidebar>
        <div class="margin-bottom-md">
            <h1 class="text-lg">Pages</h1>
        </div>
        
        <div class="app-dashboard">
            <div class="app-dashboard-column--left">
                <AppNestedMenu 
                    :items="categories.category.children" 
                    @selected="filter"
                />
            </div>
            <div class="app-dashboard-column--right">
                <DashboardTable 
                    :items="store.posts"
                    :loading="store.isLoading"
                    @replicate="store.replicate"
                    @destroy="store.destroy"
                />
            </div>
        </div>
    </LayoutSidebar>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
import { useCategoryStore } from '@/domain/categories/store/useCategoryStore'

const store = usePostStore()
const categories = useCategoryStore()

const filter = () => {
    // TODO: Hit post api again passing filter params
    console.log('Filtering...')
}

onMounted(() => {
    store.index('pages')
    categories.show(1)
})
</script>
