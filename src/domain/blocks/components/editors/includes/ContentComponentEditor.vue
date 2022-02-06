<template>
  <div>
    <label class="form-label margin-bottom-xxs">Label</label>

    <input
      :value="label"
      @input="$emit('update:label', $event.target.value)"
      class="form-control width-100% margin-bottom-xxxs" 
      type="text"
    >

    <!-- <label class="form-label margin-bottom-xxs">Title</label>
    <input v-model="title" class="form-control width-100% margin-bottom-xxxs" type="text">

    <label class="form-label margin-bottom-xxs">Body</label>
    <textarea v-model="body" class="form-control width-100% margin-bottom-xxxs" type="text" rows="3"></textarea> -->
  </div>
</template>

<script setup>
const props = defineProps({
    label: { type: String },
    title: { type: String },
    body: { type: String },
})

const emit = defineEmits(['update:label'])
</script>
