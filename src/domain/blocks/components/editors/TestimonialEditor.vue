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
        
        <!-- Padding -->
        <div class="form-group margin-bottom-sm">
            <label class="form-label margin-bottom-xxs">Padding</label>
            <div class="select margin-bottom-xxs">
                <select v-model="block.data.config.paddingTop" name="paddingTop" id="paddingTop" class="select_input form-control width-100%">
                    <option value="none" key="none" :selected="block.data.config.paddingTop === 'none'">Top: None</option>
                    <option value="md" key="md" :selected="block.data.config.paddingTop === 'md'">Top: 1</option>
                    <option value="lg" key="lg" :selected="block.data.config.paddingTop === 'lg'">Top: 2</option>
                    <option value="xl" key="xl" :selected="block.data.config.paddingTop === 'xl'">Top: 3</option>
                    <option value="xxl" key="xxl" :selected="block.data.config.paddingTop === 'xxl'">Top: 4</option>
                    <option value="xxxl" key="xxxl" :selected="block.data.config.paddingTop === 'xxxl'">Top: 5</option>
                </select>
                <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
            </div>
            <div class="select">
                <select v-model="block.data.config.paddingBottom" name="paddingBottom" id="paddingBottom" class="select_input form-control width-100%">
                    <option value="none" key="none" :selected="block.data.config.paddingBottom === 'none'">Bottom: None</option>
                    <option value="md" key="md" :selected="block.data.config.paddingBottom === 'md'">Bottom: 1</option>
                    <option value="lg" key="lg" :selected="block.data.config.paddingBottom === 'lg'">Bottom: 2</option>
                    <option value="xl" key="xl" :selected="block.data.config.paddingBottom === 'xl'">Bottom: 3</option>
                    <option value="xxl" key="xxl" :selected="block.data.config.paddingBottom === 'xxl'">Bottom: 4</option>
                    <option value="xxxl" key="xxxl" :selected="block.data.config.paddingBottom === 'xxxl'">Bottom: 5</option>
                </select>
                <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
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
