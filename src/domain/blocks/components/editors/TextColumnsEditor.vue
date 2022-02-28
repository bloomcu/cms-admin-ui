<template>
    <!-- TODO: We should dynamically generate the editor fields right here.
    Perhaps generate based on the properties of block.data -->
    <div>
        <!-- Heading Size -->
        <div class="margin-bottom-md">
            <div class="form-group">
                <label class="form-label margin-bottom-xxs">Heading Size</label>
                <div class="select">
                    <select v-model="block.data.config.headingSize" name="align" id="align" class="select_input form-control width-100%">
                        <option value="lg" key="lg" :selected="block.data.config.headingSize === 'lg'">Size 1</option>
                        <option value="xl" key="xl" :selected="block.data.config.headingSize === 'xl'">Size 2</option>
                        <option value="xxl" key="xxl" :selected="block.data.config.headingSize === 'xxl'">Size 3</option>
                        <option value="xxxl" key="xxxl" :selected="block.data.config.headingSize === 'xxxl'">Size 4</option>
                        <option value="xxxxl" key="xxxxl" :selected="block.data.config.headingSize === 'xxxxl'">Size 5</option>
                    </select>
                    <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                </div>
            </div>
        </div>
        
        <!-- Column Width -->
        <div class="margin-bottom-md">
            <div class="form-group">
                <label class="form-label margin-bottom-xxs">Column Width</label>
                <div class="select">
                    <select v-model="block.data.cols" name="cols" id="cols" class="select_input form-control width-100%">
                        <option value="1" key="1" :selected="block.data.cols === '1'">1</option>
                        <option value="2" key="2" :selected="block.data.cols === '2'">2</option>
                        <option value="3" key="3" :selected="block.data.cols === '3'">3</option>
                        <option value="4" key="4" :selected="block.data.cols === '4'">4</option>
                        <option value="6" key="6" :selected="block.data.cols === '6'">6</option>
                        <option value="12" key="12" :selected="block.data.cols === '12'">12</option>
                    </select>
                    <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                </div>
            </div>
        </div>
        
        <!-- Gap Width -->
        <div class="margin-bottom-md">
            <div class="form-group">
                <label class="form-label margin-bottom-xxs">Gap Width</label>
                <div class="select">
                    <select v-model="block.data.gap" name="gap" id="gap" class="select_input form-control width-100%">
                        <option value="xxs" key="xxs" :selected="block.data.gap === 'xxs'">Smallest</option>
                        <option value="xs" key="xs" :selected="block.data.gap === 'xs'">Extra Small</option>
                        <option value="sm" key="sm" :selected="block.data.gap === 'sm'">Small</option>
                        <option value="md" key="md" :selected="block.data.gap === 'md'">Medium</option>
                        <option value="lg" key="lg" :selected="block.data.gap === 'lg'">Large</option>
                        <option value="xl" key="xl" :selected="block.data.gap === 'xl'">Largest</option>
                    </select>
                    <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                </div>
            </div>
        </div>
        
        <!-- Columns -->
        <div class="margin-bottom-md">
          <p class="margin-bottom-xxs">Columns</p>
          
          <Draggable
              :list="block.data.columns"
              :group="{name: 'columns'}"
              :animation="200"
          >
            <div v-for="(column, index) in block.data.columns" class="bg border border-2 radius-md padding-sm margin-bottom-xs" style="cursor: move;">
              <label class="form-label margin-bottom-xxs">Label</label>
              <input v-model="block.data.columns[index].label" class="form-control width-100% margin-bottom-xxxs" type="text">
              
              <label class="form-label margin-bottom-xxs">Title</label>
              <input v-model="block.data.columns[index].title" class="form-control width-100% margin-bottom-xxxs" type="text">
              
              <label class="form-label margin-bottom-xxs">Body</label>
              <textarea v-model="block.data.columns[index].body" class="form-control width-100% margin-bottom-xxxs" type="text" rows="3"></textarea>
              
              <button @click="deleteColumn(index)" class="btn btn--sm">Delete</button>
            </div>
          </Draggable>
          
          <button @click="addColumn()" class="btn btn--primary btn--small">Add Column</button>
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

const props = defineProps({ 
    block: { type: Object, required: true } 
})

const addColumn = () => {
  props.block.data.columns.push({
    label: 'Label',
    title: 'New Column',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem lorem, eleifend eget eros id, vulputate.',
  })
}

const deleteColumn = (index) => {
  props.block.data.columns.splice(index, 1);
}
</script>
