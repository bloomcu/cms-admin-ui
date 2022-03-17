<template>
  <AuthLayout>
    <div class="flex flex-wrap items-center justify-between margin-bottom-md">
        <h1 class="text-lg">Property</h1>
    </div>
      
    <div class="app-dashboard">
        <div class="app-dashboard-column--right">
          
          <div class="grid gap-sm">
            <!-- Title -->
            <div class="col-6@xs margin-bottom-md">
                <label class="form-label margin-bottom-xxs">Title</label>
                <input class="form-control width-100%" type="text" name="property-title" value="Main Website">
            </div>
            
            <!-- Slug -->
            <div class="col-6@xs margin-bottom-md">
                <label class="form-label margin-bottom-xxs">Slug</label>
                <input class="form-control width-100%" type="text" name="property-slug" value="main-website">
            </div>
          </div>
          
          <!-- UUID -->
          <div class="margin-bottom-md">
              <label class="form-label margin-bottom-xxs">UUID</label>
              <p class="bg-contrast-lower radius-md padding-xs">8rhd3fef-d119-4ec4-8058-8fa2a84hdy6ey</p>
          </div>
          
          <!-- Domain -->
          <div class="margin-bottom-md">
              <label class="form-label margin-bottom-xxs">Domain</label>
              <input class="form-control width-100%" type="text" name="property-domain" value="https://bloomcu.com">
          </div>
          
        </div>
    </div>
  </AuthLayout>
</template>

<script setup>
</script>
