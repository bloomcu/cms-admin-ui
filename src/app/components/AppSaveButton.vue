<template>
    <button
        @click="$emit('clicked')"
        :class="loading ? 'btn--loading' : ''"
        class="btn btn--primary btn--preserve-width width-100%"
    >
        <span class="btn__content-a">
            <slot/>
        </span>
        <span class="btn__content-b">
            <svg class="icon icon--is-spinning" aria-hidden="true" viewBox="0 0 16 16"><title>Loading</title><g stroke-width="1" fill="currentColor" stroke="currentColor"><path d="M.5,8a7.5,7.5,0,1,1,1.91,5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
        </span>
    </button>
</template>

<script setup>
const props = defineProps({ 
    loading: { type: Boolean, default: false } 
})
</script>

<style lang="scss">
.btn .btn__content-a {
    display: inline-flex;
}

.btn .btn__content-b {
    display: none;
}

.btn__content-a, .btn__content-b {
    align-items: center;
}

.btn--loading {
    .btn__content-a {
        display: none;
    }

    .btn__content-b {
        display: inline-block; // fallback
        display: inline-flex;
    }
}

/* preserve button width when switching from state A to state B */
.btn--preserve-width {
    .btn__content-b {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        justify-content: center;
    }

    &.btn--loading .btn__content-a {
        display: inline-block; // fallback
        display: inline-flex;
        visibility: hidden;
    }
}
</style>
