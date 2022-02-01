<template>
    <div>
        <!-- Section -->
        <div class="margin-bottom-sm text-component">
            <h4>SEO</h4>
            <p class="text-sm">Set up and optimize how your site appears in search engines. <a href="#">Learn More</a></p>
        </div>

        <!-- SEO Title -->
        <div class="form-group margin-bottom-sm">
            <label class="form-label margin-bottom-xxs">SEO Title</label>
            <input v-model="store.post.meta.title" type="text" class="form-control width-100%">
        </div>

        <!-- SEO Description -->
        <div class="form-group margin-bottom-sm">
            <label class="form-label margin-bottom-xxs">SEO Description</label>
            <textarea v-model="store.post.meta.description" type="textarea" rows="4" class="form-control width-100%" />
        </div>
    </div>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'

const store = usePostStore()
</script>
