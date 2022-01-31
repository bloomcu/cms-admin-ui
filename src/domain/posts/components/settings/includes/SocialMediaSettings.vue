<template>
    <div>
        <!-- Section -->
        <div class="margin-bottom-md text-component">
            <h4>Social Media</h4>
            <p class="text-sm">Control this {{ store.post.type }} appears on social media. <a href="#">Learn More</a></p>
        </div>
    </div>
</template>

<script setup>
import { postStore } from '@/domain/posts/store/postStore'

const store = postStore()
</script>
