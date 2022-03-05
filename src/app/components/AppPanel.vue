<template>
    <div>
        <div class="panel panel--is-visible" ref="target">
          <div class="panel__body utility__scrollable">
              <slot />
          </div>

            <button @click="emit('close')" class="panel__close-btn">
                <svg class="icon icon--xs" viewBox="0 0 16 16"><g stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line><line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line></g></svg>
            </button>
        </div>

        <div @click="emit('close')" class="panel__overlay"></div>
    </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'

const emit = defineEmits(['close'])

const target = ref(null)
onClickOutside(target, (event) => emit('close'))
</script>

<style lang="scss">
.panel {
    display: flex;
    flex-direction: column;
    
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 90%;
    
    background-color: var(--color-white);
    box-shadow: var(--shadow-xl);
    z-index: 2;
}

// Backdrop
.panel__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: alpha(var(--color-contrast-higher), 0.50);
    cursor: pointer;
}

// scrollable area
.panel__body {
    height: 100%;
    padding: 90px var(--space-xl) 0;
    overflow: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch; // smooth scroll on iOS
}

// panel visible
.panel--is-visible {
    .panel,
    .panel__overlay {
        visibility: visible;
        opacity: 1;
    }
}

// Close button
.panel__close-btn {
    position: absolute;
    top: 72px;
    right: 16px;
  
    width: 40px;
    height: 40px;
    
    background-color: var(--color-bg-dark);
    border-radius: 50%;
    border: none;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background-color: var(--color-bg-darker);
    }

    .icon {
        display: block;
        margin: auto;
        color: var(--color-black);
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
