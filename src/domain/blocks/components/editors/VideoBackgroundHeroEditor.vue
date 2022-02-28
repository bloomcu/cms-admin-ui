<template>
    <!-- TODO: We should dynamically generate the editor fields right here.
    Perhaps generate based on the properties of block.data -->
    <div>
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
        
        <!-- Video -->
        <div class="margin-bottom-md">
            <p class="margin-bottom-xxs">Video</p>
            
            <label class="form-label margin-bottom-xxs">Video Source URL</label>
            <input v-model="block.data.video.src" class="form-control width-100% margin-bottom-xxxs" type="text">
            
            <input v-model="block.data.video.loop" type="checkbox" class="margin-right-xxs" id="loop">
            <label class="form-label" for="loop">Loop</label>
            
            <input v-model="block.data.video.autoplay" type="checkbox" class="margin-right-xxs" id="autoplay">
            <label class="form-label" for="autoplay">Autoplay</label>
            
            <input v-model="block.data.video.muted" type="checkbox" class="margin-right-xxs" id="muted">
            <label class="form-label" for="muted">Muted Audio</label>
            
            <input v-model="block.data.video.plays_inline" type="checkbox" class="margin-right-xxs" id="plays_inline">
            <label class="form-label" for="plays_inline">Play Inline</label>
        </div>
        
        <!-- Video Placeholder Image -->
        <div class="margin-bottom-md">
            <label class="form-label block margin-bottom-xxs">Video Placeholder Image</label>
            
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
          
          <Draggable
              :list="block.data.buttons"
              :group="{name: 'buttons'}"
              :animation="200"
          >
            <div v-for="(button, index) in block.data.buttons" class="bg border border-2 radius-md padding-sm margin-bottom-xs" style="cursor: move;">
              <label class="form-label margin-bottom-xxs">Text</label>
              <input v-model="block.data.buttons[index].text" class="form-control width-100% margin-bottom-xxxs" type="text">
              
              <label class="form-label margin-bottom-xxs">URL</label>
              <input v-model="block.data.buttons[index].href" class="form-control width-100% margin-bottom-xxxs" type="text">
              
              <div class="form-group margin-bottom-sm">
                  <label class="form-label margin-bottom-xxs">Style</label>
                  <div class="select">
                      <select v-model="block.data.buttons[index].variant" name="variant" id="variant" class="select_input form-control width-100%">
                          <option value="primary" key="primary" :selected="block.data.buttons[index].variant === 'primary'">Style 1</option>
                          <option value="accent" key="accent" :selected="block.data.buttons[index].variant === 'accent'">Style 2</option>
                          <option value="subtle" key="subtle" :selected="block.data.buttons[index].variant === 'subtle'">Style 3</option>
                      </select>
                      <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                  </div>
              </div>
              
              <button @click="deleteButton(index)" class="btn btn--sm">Delete</button>
            </div>
          </Draggable>
          
          <!-- Add button -->
          <button @click="addButton()" class="btn btn--primary btn--small">Add Button</button>
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
import Draggable from 'vuedraggable'
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
