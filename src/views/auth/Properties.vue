<template>
  <AuthLayout>
    <div class="flex flex-wrap items-center justify-between margin-bottom-md">
        <h1 class="text-lg">Properties</h1>
        <!-- <Button class="btn btn--primary btn--sm">New Property</Button> -->
    </div>
      
    <div class="app-dashboard">
        <div class="app-dashboard-column--right">
          <div class="grid gap-md">
            <AppCard 
              title="Main Website" 
              subtitle="https://website.com"
              image="/static/img/PropertyMainWebsite.jpg" 
              class="col-6@md"
            />
            <!-- <AppCard 
              title="Blog" 
              subtitle="https://blog.website.com"
              image="/static/img/PropertyBlog.jpg" 
              class="col-6@md"
            /> -->
          </div>
        </div>
    </div>
  </AuthLayout>
</template>

<script setup>

</script>
