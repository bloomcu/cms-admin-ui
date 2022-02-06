<template>
    <transition name="fade">
        <div>
            <div class="drawer drawer--is-visible" ref="target">
                <div class="drawer__content">
                    <div class="drawer__body utility__scrollable">
                        <slot />
                    </div>
                </div>

                <button @click="close" class="drawer__close-btn">
                    <svg class="icon icon--xs" viewBox="0 0 16 16"><g stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line><line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line></g></svg>
                </button>
            </div>

            <!-- <div @click="close" class="drawer__overlay"></div> -->
        </div>
    </transition>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'

const target = ref(null)
onClickOutside(target, (event) => emit('close'))

function close() {
    emit('close')
    // document.body.classList.toggle('utility__lock-scroll')
}

const emit = defineEmits(['close'])
</script>

<style lang="scss">
.drawer {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 820px;
    background-color: var(--color-contrast-lower);
    box-shadow: var(--shadow-xl);
    z-index: 1;

    // Visibility hidden
    // visibility: hidden;
    // opacity: 0;
    // -webkit-transition: opacity 0.2s, visibility 0.2s;
    // transition: opacity 0.2s, visibility 0.2s;
}

// Backdrop
.drawer__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    background-color: alpha(var(--color-contrast-higher), 0.75);
    cursor: pointer;

    // Hidden by default
    // visibility: hidden;
    // opacity: 0;
    // -webkit-transition: opacity 0.2s, visibility 0.2s;
    // transition: opacity 0.2s, visibility 0.2s;
}

// Drawer visible
.drawer--is-visible {
    .drawer,
    .drawer__overlay {
        visibility: visible;
        opacity: 1;
    }
}

// Close button
.drawer__close-btn {
    width: 48px;
    height: 48px;
    position: fixed;
    top: var(--space-sm);
    left: var(--space-sm);
    
    background-color: var(--color-contrast-high);
    border-radius: 50%;
    border: none;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background-color: var(--color-contrast-higher);
    }

    .icon {
        display: block;
        margin: auto;
        color: var(--color-bg);
    }
}

.drawer__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    // .drawer--is-visible & {
    //     &:not() {
    //         pointer-events: none;
    //         background-color: transparent;
    //     }
    // }
}

// scrollable area
.drawer__body {
    height: 100%;
    overflow: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch; // smooth scroll on iOS
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
