<template>
  <div id="app">
      <HelloWorld msg="Hello Vue 2 + Vite" />
      <Hero
          label="This is label"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!"
          :image="{
            src: 'https://picsum.photos/id/10/1280/720',
          }"
      />
  </div>
</template>

<script setup>
import { Hero } from 'v-codyhouse-componentz'
</script>
