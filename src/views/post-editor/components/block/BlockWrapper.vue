<template>
    <div class="block-wrapper" :class="editing ? 'block-wrapper--editing' : ''">
        <BlockControls :uuid="block.uuid"/>
        
        <Block :block="block"/>
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
