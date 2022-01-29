<template>
    <div>
        <h1>{{ msg }}</h1>
        <button @click="count++">count is: {{ count }}</button>
    </div>
</template>

<script setup>
const props = defineProps({
    msg: String
})

const count = ref(0)

// export default {
//   props: {
//     msg: String,
//   },
// 
//   data() {
//     return {
//       count: 0,
//     }
//   }
// };
</script>
