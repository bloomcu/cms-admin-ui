<template>
    <div>
        <div class="margin-bottom-md">
            <h1 class="text-md">{{ store.page.title }}</h1>
        </div>
        
        <div class="margin-bottom-md">
            <p>Slug: {{ store.page.slug }}</p>
        </div>
        
        <!-- <Hero
          label="This is label"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!"
          :buttons="[
              {
                href: '/helloworld',
                target: '__blank',
                text: 'Download',
                variant: 'primary'
              }
          ]"
          :image="{
            src: 'https://img.wallpapersafari.com/desktop/1024/576/90/72/qQ6bx0.png'
          }"
        /> -->
    </div>
</template>

<script setup>
import { Hero } from 'v-codyhouse-componentz'
import { usePagesStore } from '@/pages/store'

const store = usePagesStore()
</script>
