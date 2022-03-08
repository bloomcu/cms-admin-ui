<template>
    <div>
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
        
        <!-- Table -->
        <div class="margin-bottom-md">
            <label class="form-label block margin-bottom-xxs">Table</label>
            <div @click="toggle()" class="block-editor__file">
                <div class="block-editor__file__thumbnail block-editor__file__icon">
                  <svg class="icon" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="round" class="nc-icon-wrapper"><line x1="2" y1="8" x2="22" y2="8" data-cap="butt"></line><line x1="2" y1="15" x2="22" y2="15" data-cap="butt"></line><line x1="8" y1="2" x2="8" y2="22" data-cap="butt"></line><path d="M20,22H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2V20A2,2,0,0,1,20,22Z"></path></g></svg>
                </div>
                <div class="block-editor__file__description">
                    <p class="text-sm">Table</p>
                    <span class="btn btn--primary btn--sm">Edit Table</span>
                </div>
            </div>
        </div>
        
        <!-- Table Content Editor Panel -->
        <AppPanel v-if="open" @close="toggle()">
          <TableContentEditor :block="block"/>
        </AppPanel>
        
        <!-- Align -->
        <div class="form-group margin-bottom-sm">
            <label class="form-label margin-bottom-xxs">Align</label>
            <div class="select">
                <select v-model="block.data.align" name="align" id="align" class="select_input form-control width-100%">
                    <option value="left" key="left" :selected="block.data.align === 'left'">Left</option>
                    <option value="center" key="center" :selected="block.data.align === 'center'">Center</option>
                </select>
                <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
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

const open = ref(false)

const toggle = () => {
  open.value = !open.value
}

const props = defineProps({ 
    block: { type: Object, required: true } 
})
</script>
