<template>
    <LayoutSidebar>
        <div class="margin-bottom-md">
            <h1 class="text-lg">Files</h1>
        </div>
        
        <div class="app-dashboard">
            <div class="app-dashboard-column--left">
                <AppNestedMenu 
                    :items="categories.category.children" 
                    @selected="filter"
                />
            </div>
            <div class="app-dashboard-column--right">
                <!-- <ul class="list">
                    <DashboardTable 
                        :items="store.posts"
                        :loading="store.isLoading"
                        @replicate="store.replicate"
                        @destroy="store.destroy"
                    />
                </ul> -->
            </div>
        </div>
    </LayoutSidebar>
</template>

<script setup>
// import { useFileStore } from '@/domain/files/store/useFileStore'
import { useCategoryStore } from '@/domain/categories/store/useCategoryStore'

// const store = useFileStore()
const categories = useCategoryStore()

const filter = () => {
    // TODO: Hit post api again passing filter params
    console.log('Filtering...')
}

onMounted(() => {
    // store.index()
    categories.show(1)
})
</script>
