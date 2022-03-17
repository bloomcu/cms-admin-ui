<template>
    <DashboardLayout>
        <template v-slot:sidebar>
          <AppSidebar/>
        </template>
      
        <div class="margin-bottom-md">
            <h1 class="text-lg">Files</h1>
        </div>
        
        <div class="app-dashboard">            
            <div class="app-dashboard-column--right">
                <FileUploader/>
                <FileGallery :files="store.files" />
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup>
import { useFileStore } from '@/domain/files/store/useFileStore'

const store = useFileStore()

onMounted(() => {
    store.index()
})
</script>
