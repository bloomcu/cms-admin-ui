<template>
    <div>
        <!-- Testimonial -->
        <div class="margin-bottom-md">
            <label class="form-label margin-bottom-xxs">Testimonial</label>
            <textarea v-model="block.data.testimonial" class="form-control width-100%" rows="5" type="text"></textarea>
        </div>

        <!-- Title -->
        <div class="margin-bottom-md">
            <label class="form-label margin-bottom-xxs">Title</label>
            <input v-model="block.data.title" class="form-control width-100%" type="text"/>
        </div>

        <!-- Subtitle -->
        <div class="margin-bottom-md">
            <label class="form-label margin-bottom-xxs">Subtitle</label>
            <input v-model="block.data.subtitle" class="form-control width-100%" type="text"/>
        </div>
        
        <!-- Image -->
        <div class="margin-bottom-md">
            <label class="form-label block margin-bottom-xxs">Image</label>
            <div @click="editor.showFiles()" class="block-editor__file">
                <div
                    :style="{ 'background-image': 'url(' + `https://d25r5txdw1c9o7.cloudfront.net/fit-in/100x100/${block.data.image.src}` + ')' }"
                    class="block-editor__file__thumbnail"
                />
                <div class="block-editor__file__description">
                    <!-- TODO: Can we show the actual image title? -->
                    <p class="text-sm">Image Title</p>
                    <button @click="editor.showFiles()" class="btn btn--primary btn--sm">Set Image</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { usePostEditorStore } from '@/views/post-editor/store/usePostEditorStore'

const editor = usePostEditorStore()

const props = defineProps({ 
    block: { type: Object, required: true } 
})
</script>
