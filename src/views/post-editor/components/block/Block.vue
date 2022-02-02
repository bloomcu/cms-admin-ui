<template>
    <div class="block-wrapper" :class="editing ? 'block-wrapper--editing' : ''">
        <!-- <component :is="block.component" v-bind="block.data" /> -->
        
        <!-- <Hero v-bind="block.data"/> -->
        
        <!-- <Hero
          label="This is label"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!"
          :image="{src: 'https://img.wallpapersafari.com/desktop/1024/576/90/72/qQ6bx0.png'}"
        /> -->
        
        <!-- <MyButton/> -->
        <p class="padding-y-lg">The block</p>
        <BlockControls :uuid="block.uuid"/>
    </div>
</template>

<script setup>
// import { MyButton } from 'vite-cody2'

const props = defineProps({
    block: { type: Object, required: true },
    editing: { type: Boolean, default: false } 
})
</script>

<style lang="scss">
.block-wrapper {
    position: relative;
    overflow: hidden;
    background-color: var(--color-white);

    &--editing {
        border: 2px solid var(--color-primary);
    }
}
</style>
