<template>
    <div class="block-wrapper" :class="editing ? 'block-wrapper--editing' : ''">        
        <!-- TODO: Change block.component to block.name -->
        <component :is="block.component" v-bind="block.data" />
        
        <BlockControls :uuid="block.uuid"/>
    </div>
</template>

<script setup>
import BlockControls from '@/views/post-editor/components/block/BlockControls.vue'

// TODO: Currently the "editing" props is not being utilized. Look at checking the
// route block uuid param to determine is this block is being edited.
const props = defineProps({
    block: { type: Object, required: true },
    editing: { type: Boolean, default: false } 
})
</script>

<script>
import { Hero, Feature } from 'vite-codytest'

export default defineComponent({
    components: {
        Hero,
        Feature,
    }
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
