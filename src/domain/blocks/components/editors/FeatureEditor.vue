<template>
    <div>
        <!-- Orientation -->
        <div class="form-group margin-bottom-sm">
            <label class="form-label margin-bottom-xxs">Orientation</label>
            <div class="select">
                <select v-model="block.data.orientation" name="orientation" id="orientation" class="select_input form-control width-100%">
                    <option value="left" key="left" :selected="block.data.orientation === 'left'">Left</option>
                    <option value="right" key="right" :selected="block.data.orientation === 'right'">Right</option>
                </select>
                <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
            </div>
        </div>

        <!-- Label -->
        <div class="margin-bottom-md">
            <label class="form-label margin-bottom-xxs">Label</label>
            <input v-model="block.data.label" class="form-control width-100%" type="text">
        </div>

        <!-- Title -->
        <div class="margin-bottom-md">
            <label class="form-label margin-bottom-xxs">Title</label>
            <textarea v-model="block.data.title" class="form-control width-100% margin-bottom-xxs" type="text"></textarea>
            
            <!-- Size -->
            <div class="select">
                <select v-model="block.data.config.headingSize" name="align" id="align" class="select_input form-control width-100%">
                    <option value="md" key="md" :selected="block.data.config.headingSize === 'md'">Size 1</option>
                    <option value="lg" key="lg" :selected="block.data.config.headingSize === 'lg'">Size 2</option>
                    <option value="xl" key="xl" :selected="block.data.config.headingSize === 'xl'">Size 3</option>
                    <option value="xxl" key="xxl" :selected="block.data.config.headingSize === 'xxl'">Size 4</option>
                    <option value="xxxl" key="xxxl" :selected="block.data.config.headingSize === 'xxxl'">Size 5</option>
                    <option value="xxxxl" key="xxxxl" :selected="block.data.config.headingSize === 'xxxxl'">Size 6</option>
                </select>
                <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
            </div>
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
          
          <Draggable
              :list="block.data.buttons"
              :group="{name: 'buttons'}"
              :animation="200"
          >
            <div v-for="(button, index) in block.data.buttons" class="bg border border-2 radius-md padding-sm margin-bottom-xs" style="cursor: move;">
              <!-- Text -->
              <label class="form-label margin-bottom-xxs">Text</label>
              <input v-model="block.data.buttons[index].text" class="form-control width-100% margin-bottom-xxxs" type="text">
              
              <!-- Type -->
              <div class="form-group margin-bottom-xxs">
                <input v-model="block.data.buttons[index].type" value="internal" type="radio" class="margin-right-xxxs" :id="`internal-${index}`">
                <label class="form-label margin-right-sm" :for="`internal-${index}`">Internal</label>
                
                <input v-model="block.data.buttons[index].type" value="external" type="radio" class="margin-right-xxxs" :id="`external-${index}`">
                <label class="form-label margin-right-sm" :for="`external-${index}`">External</label>
                
                <!-- <input v-model="block.data.buttons[index].type" value="trigger" type="radio" class="margin-right-xxxs" :id="`trigger-${index}`">
                <label class="form-label margin-right-sm" :for="`trigger-${index}`">Trigger</label> -->
              </div>
              
              <!-- Internal: Post -->
              <div v-if="block.data.buttons[index].type == 'internal'" class="form-group margin-bottom-sm">
                  <label class="form-label margin-bottom-xxs">Page / Article</label>
                  <div class="select">
                      <select v-model="block.data.buttons[index].post_id" name="variant" id="variant" class="select_input form-control width-100%">
                          <option 
                            v-for="post in postStore.posts"
                            v-if="post.was_published"
                            :key="post.id"
                            :value="post.id" 
                            :selected="block.data.buttons[index].post_id === post.id"
                          >
                            {{ post.title }}
                          </option>
                      </select>
                      <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                  </div>
              </div>
              
              <!-- External: Url -->
              <div v-if="block.data.buttons[index].type == 'external'">
                <label class="form-label margin-bottom-xxs">URL</label>
                <input v-model="block.data.buttons[index].href" class="form-control width-100% margin-bottom-xxxs" type="text">
              </div>
              
              <!-- Variant -->
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
import { usePostStore } from '@/domain/posts/store/usePostStore'

const props = defineProps({ 
    block: { type: Object, required: true } 
})

const editor = usePostEditorStore()
const postStore = usePostStore()

onMounted(() => {
    postStore.index({
      'filter[is_blueprint]': 0,
      // 'filter[type]': 'page',
    })
})

const addButton = () => {
  props.block.data.buttons.push({
    type: 'internal',
    post_id: null,
    post_url: '',
    variant: 'accent',
    text: 'Button',
    href: '',
    size: '',
    trigger: '',
    target: '',
  })
}

const deleteButton = (index) => {
  props.block.data.buttons.splice(index, 1);
}
</script>
