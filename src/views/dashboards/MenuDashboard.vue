<template>
    <LayoutSidebar>
        <div class="margin-bottom-md">
            <h1 class="text-lg">Menus</h1>
        </div>
        
        <div class="app-dashboard">
            <div class="app-dashboard-column--right">
                <ul class="list">
                    <DashboardTable 
                        route="menuEditor"
                        :items="store.menus"
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
import { useMenuStore } from '@/domain/menus/store/useMenuStore'

const store = useMenuStore()

const filter = () => {
    // TODO: Hit post api again passing filter params
    console.log('Filtering...')
}

onMounted(() => {
    store.index()
})
</script>
