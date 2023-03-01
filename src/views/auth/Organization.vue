<template>
  <AuthLayout>
    <div class="flex flex-wrap items-center justify-between margin-bottom-md">
        <h1 class="text-lg">Organization</h1>
    </div>
      
    <div class="app-dashboard">
        <div class="app-dashboard-column--right">
          
          <div class="grid gap-sm">
            <!-- Title -->
            <div class="col-6@xs margin-bottom-md">
                <label class="form-label margin-bottom-xxs">Title</label>
                <input class="form-control width-100%" type="text" name="organization-title" value="BloomCU">
            </div>
            
            <!-- Slug -->
            <div class="col-6@xs margin-bottom-md">
                <label class="form-label margin-bottom-xxs">Slug</label>
                <input class="form-control width-100%" type="text" name="organization-slug" value="bloomcu">
            </div>
          </div>
          
          <!-- UUID -->
          <div class="margin-bottom-md">
              <label class="form-label margin-bottom-xxs">UUID</label>
              <p class="bg-contrast-lower radius-md padding-xs">0f783fef-d119-4ec4-8058-8fa2a8165cb9</p>
          </div>
        </div>
    </div>
  </AuthLayout>
</template>

<script setup>
</script>
