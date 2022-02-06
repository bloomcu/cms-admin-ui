<template>
    <div class="block-wrapper" :class="editing ? 'block-wrapper--editing' : ''">
        <BlockControls :uuid="block.uuid"/>
        
        <!-- TODO: Change block.component to block.name -->
        <Component :is="block.component" v-bind="block.data" />
    </div>
</template>

<script>
import { 
  Hero,
  BoxedHero,
  VideoBackgroundHero,
  Feature,
  Testimonial,
  TextColumns
} from 'vite-codytest'

export default defineComponent({
    components: {
        Hero,
        BoxedHero,
        VideoBackgroundHero,
        Feature,
        Testimonial,
        TextColumns
    }
})    
</script>

<script setup>
import BlockControls from '@/views/post-editor/components/block/BlockControls.vue'

// TODO: Currently the "editing" props is not being utilized. Look at checking the
// route block uuid param to determine is this block is being edited.
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
