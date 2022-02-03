<template>
    <div class="block-wrapper" :class="editing ? 'block-wrapper--editing' : ''">        
        <!-- TODO: Change block.component to block.name -->
        <component :is="block.component" v-bind="block.data" />
        
        <BlockControls :uuid="block.uuid"/>
    </div>
</template>

<script>
import { Hero, Feature } from 'vite-codytest'
import BlockControls from '@/views/post-editor/components/block/BlockControls.vue'

export default defineComponent({
    props: {
        block: { type: Object, required: true },
        editing: { type: Boolean, default: false } 
    },
    
    components: {
        BlockControls,
        Hero,
        Feature,
    }
})    
</script>

<script setup>
// import { Hero, Feature } from 'vite-codytest'
// import * from 'vite-codytest'

// const props = defineProps({
//     block: { type: Object, required: true },
//     editing: { type: Boolean, default: false } 
// })

// const AsyncComponent = defineAsyncComponent(() => import())

// Picker: () => import("./emoji-mart-vue")

// const component = computed(() => {})

// console.log(props.block.data)
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
