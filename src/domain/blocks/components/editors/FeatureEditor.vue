<template>
    <div>
        <!-- Invert -->
        <div class="margin-bottom-md">
            <input v-model="block.data.invert" type="checkbox" class="margin-right-xxs" id="invert">
            <label class="form-label" for="invert">Invert</label>
        </div>

        <!-- Label -->
        <div class="margin-bottom-md">
            <label class="form-label margin-bottom-xxs">Label</label>
            <input v-model="block.data.label" class="form-control width-100%" type="text">
        </div>

        <!-- Title -->
        <div class="margin-bottom-md">
            <label class="form-label margin-bottom-xxs">Title</label>
            <textarea v-model="block.data.title" class="form-control width-100%" type="text"></textarea>
        </div>

        <!-- Subtitle -->
        <div class="margin-bottom-md">
            <label class="form-label margin-bottom-xxs">Subtitle</label>
            <textarea v-model="block.data.subtitle" class="form-control width-100%" rows="3" type="text"></textarea>
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

        <!-- Button One -->
        <div class="margin-bottom-md">
            <label class="form-label margin-bottom-xxs">Button One</label>
            <input v-model="block.data.buttons[0].text" class="form-control width-100% margin-bottom-xxxs" type="text">
            <input v-model="block.data.buttons[0].href" class="form-control width-100%" type="text">
        </div>

        <!-- Button Two -->
        <div class="margin-bottom-md">
            <label class="form-label margin-bottom-xxs">Button Two</label>
            <input v-model="block.data.buttons[1].text" class="form-control width-100% margin-bottom-xxxs" type="text">
            <input v-model="block.data.buttons[1].href" class="form-control width-100%" type="text">
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
