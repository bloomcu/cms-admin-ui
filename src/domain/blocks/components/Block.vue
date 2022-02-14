<template>
    <Component :is="block.component" v-bind="block.data" />
</template>

<script>
import { 
  Hero,
  BoxedHero,
  VideoBackgroundHero,
  AppTable,
  Feature,
  FeatureV11,
  Testimonial,
  TextColumns
} from 'vite-component-library'

export default defineComponent({
    components: {
        Hero,
        BoxedHero,
        VideoBackgroundHero,
        AppTable,
        Feature,
        FeatureV11,
        Testimonial,
        TextColumns
    }
})    
</script>

<script setup>
const props = defineProps({
    block: { type: Object, required: true }
})
</script>
