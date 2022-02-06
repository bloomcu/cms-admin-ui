<template>
    <transition name="fade">
        <div class="modal modal--is-visible">
            <div class="modal__content" ref="target">
                <button @click="$emit('close')" class="reset modal__close-btn modal__close-btn--inner">
                    <!-- TODO: Move icon to an app component so it's reusable -->
                    <svg class="icon icon--sm" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="3" x2="21" y2="21" /><line x1="21" y1="3" x2="3" y2="21" /></g>
                    </svg>
                </button>
                <slot/>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'

const props = defineProps({ 
    open: { type: Boolean, default: false } 
})

const target = ref(null)
onClickOutside(target, (event) => emit('close'))

const emit = defineEmits(['close'])
</script>

<style lang="scss" scoped>
.modal {
    // Flexbox
    display: flex;
    justify-content: center;
    align-items: center;

    // Position
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    // Style
    padding: var(--space-md);
    background-color: alpha(var(--color-contrast-higher), 0.8);
}

.modal__content {
    background-color: var(--color-bg);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
}

.modal__close-btn {
    display: flex;
    flex-shrink: 0;
    border-radius: 50%;
    transition: .2s;
    cursor: pointer;

    .icon {
        display: block;
        margin: auto;
    }
}
 
.modal__close-btn--inner {
    width: 48px;
    height: 48px;
    position: relative;
    float: right;
    top: 15px;
    right: 15px;
    background-color: var(--color-primary);

    &:hover {
        background-color: var(--color-primary-light);
    }

    .icon {
        color: var(--color-bg);
    }
}

// Animations
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
