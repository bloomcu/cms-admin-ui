<template>
    <div>
        <h1>Home</h1>
        <Hero title="test"/>
    </div>
</template>

<script>
import { Hero, VideoBackgroundHero, Feature } from 'vite-codytest'

export default defineComponent({
    components: {
        Hero,
        VideoBackgroundHero,
        Feature,
    }
})   
</script>
