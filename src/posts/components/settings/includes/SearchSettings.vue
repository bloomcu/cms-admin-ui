<template>
    <h4 class="margin-bottom-sm">SEO</h4>

    <p class="margin-bottom-md">
        Set up and optimize how your site appears in search engines. <br>
        <a href="#">Learn More</a>
    </p>

    <!-- SEO Title -->
    <app-input
        label="SEO Title"
        type="text"
    />

    <!-- SEO Description -->
    <app-input
        label="SEO Description"
        type="textarea"
    />
</template>

<script>
// Components
import AppInput from '@/App/components/form/AppInput.vue'

export default {
    components: {
        AppInput
    }
}
</script>
