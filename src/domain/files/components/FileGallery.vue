<template>
    <div class="files-gallery grid gap-xs">
        <div
            v-for="(file, index) in store.files"
            :key="index"
            @click="select(file)"
            :style="{ backgroundImage: 'url(' + `https://d25r5txdw1c9o7.cloudfront.net/fit-in/350x350/${file.src}` + ')' }"
            class="files-gallery__item col-4"
        />
    </div>
</template>

<script setup>
import { useFileStore } from '@/domain/files/store/useFileStore'

const store = useFileStore()
// const props = defineProps({ 
//     files: { type: Array }
// })

onMounted(() => {
    store.index()
})

const select = (file) => {
    emit('selected', file)
}

const emit = defineEmits(['selected'])
</script>

<style lang="scss">
.files-gallery {
    &__item {
        height: 160px;
        display: inline-block;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        border-radius: var(--radius-md);
        transition: box-shadow;
        transition-duration: .4s;
        cursor: pointer;

        &:hover {
            box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
        }
    }
}
</style>
