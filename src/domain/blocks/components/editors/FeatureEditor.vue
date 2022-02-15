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

        <!-- Button Repeater -->
        <div class="margin-bottom-md">
          <label class="form-label margin-bottom-xxs">Buttons</label>
          
          <div v-for="(button, index) in block.data.buttons" class="bg border border-2 radius-md padding-sm margin-bottom-xs" style="cursor: move;">
            <div class="form-group margin-bottom-xxxs">
                <label class="form-label margin-bottom-xxs">Variant</label>
                <div class="select">
                    <select v-model="block.data.buttons[0].variant" name="variant" id="variant" class="select_input form-control width-100%">
                        <option value="primary" key="primary" :selected="block.data.buttons[index].variant === 'primary'">Style 1</option>
                        <option value="accent" key="accent" :selected="block.data.buttons[index].variant === 'accent'">Style 2</option>
                        <option value="subtle" key="subtle" :selected="block.data.buttons[index].variant === 'subtle'">Style 3</option>
                    </select>
                    <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                </div>
            </div>
            
            <div class="margin-bottom-md">
                <label class="form-label margin-bottom-xxs">Text</label>
                <input v-model="block.data.buttons[index].text" class="form-control width-100% margin-bottom-xxxs" type="text">
                
                <label class="form-label margin-bottom-xxs">URL</label>
                <input v-model="block.data.buttons[index].href" class="form-control width-100%" type="text">
            </div>
            
            <button @click="deleteButton(index)" class="btn btn--sm">Delete</button>
          </div>
          
          <!-- Add button -->
          <button @click="addButton()" class="btn btn--primary btn--small">Add Button</button>
        </div>
    </div>
</template>

<script setup>
import { usePostEditorStore } from '@/views/post-editor/store/usePostEditorStore'

const editor = usePostEditorStore()

const addButton = () => {
  props.block.data.buttons.push({
    variant: 'accent',
    text: 'Button',
    href: '',
  })
}

const deleteButton = (index) => {
  props.block.data.buttons.splice(index, 1);
}

const props = defineProps({ 
    block: { type: Object, required: true } 
})
</script>
