<template>
  <!-- <div id="app">
      <Hero />
  </div> -->
  <div class="container max-width-adaptive-lg padding-top-md">
        <AppNavbar />
        <main>
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import { Hero } from 'v-codyhouse-componentz'
</script>
