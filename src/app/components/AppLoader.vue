<template>
  <div class="circle-loader circle-loader--v2" role="alert">
    <p class="circle-loader__label">Loading...</p>
    <div aria-hidden="true">
      <svg class="circle-loader__svg" width="48" height="48" viewBox="0 0 48 48"><circle class="circle-loader__base" cx="24" cy="24" r="19" fill="none" stroke="currentColor" stroke-width="2"/><circle class="circle-loader__fill" cx="24" cy="24" r="19" fill="none" stroke="currentColor" stroke-width="2"/></svg>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
/* -------------------------------- 

File#: _1_circle-loader
Title: Circle Loader
Descr: A collection of animated circle loaders
Usage: codyhouse.co/license

-------------------------------- */

:root {
  // v1
  --circle-loader-v1-size: 48px;
  --circle-loader-v1-stroke-width: 4px;

  // v2
  --circle-loader-v2-size: 64px;
  --circle-loader-v2-stroke-width: 2;

  // v3
  --circle-loader-v3-size: 64px;

  // v4
  --circle-loader-v4-size: 48px;

  // v5
  --circle-loader-v5-size: 64px;

  // v6
  --circle-loader-v6-size: 48px;
}

.circle-loader {
  position: relative;
  display: inline-block;
}

@supports (animation-name: this) {
  .circle-loader__label {
    @include srHide; // show label only to screen readers if animations are supported
  }
}

// loader v1 - rotation
@supports (animation-name: this) {
  .circle-loader--v1 {
    transform: rotate(45deg);
    will-change: transform;
    animation: circle-loader-1 0.75s infinite var(--ease-in-out);

    .circle-loader__circle {
      width: var(--circle-loader-v1-size); // loader width
      height: var(--circle-loader-v1-size); // loader height
      border-width: var(--circle-loader-v1-stroke-width); // loader stroke width
      border-style: solid;
      border-color: alpha(var(--color-primary), 0.2); // loader base color
      border-radius: 50%;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-width: inherit;
        border-style: inherit;
        border-color: transparent;
        border-top-color: var(--color-primary); // loader fill color
        border-radius: inherit;
      }
    }
  }
}

@keyframes circle-loader-1 {
  0% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(405deg);
  }
}

// loader v2 - filling
@supports (animation-name: this) {
  .circle-loader--v2 {
    will-change: transform;
    animation: circle-loader-spinning-main 1.4s infinite linear;

    .circle-loader__svg {
      display: block;
      width: var(--circle-loader-v2-size);
      height: var(--circle-loader-v2-size);
      color: var(--color-primary); // loader color

      > * {
        stroke-width: var(--circle-loader-v2-stroke-width); // loader stroke width
      }
    }

    .circle-loader__base {
      opacity: 0.2;
    }

    .circle-loader__fill {
      stroke-linecap: round; // optional - remove if you prefer butt caps
      stroke-dashoffset: 0;
      stroke-dasharray: 90 120;
      transform-origin: 50% 50%;
      transform: rotate(45deg);
      animation: circle-loader-dash 1.4s infinite;
    }
  }
}

@keyframes circle-loader-dash {
  0%, 20% {
    stroke-dashoffset: 0;
    transform: rotate(0);
  }

  50%, 70% {
    stroke-dashoffset: 80;
    transform: rotate(270deg);
  }

  100% {
    stroke-dashoffset: 0;
    transform: rotate(360deg);
  }
}

@keyframes circle-loader-spinning-main {
  to {
    transform: rotate(360deg);
  }
}

// loader v3 - drop
@supports (animation-name: this) {
  .circle-loader--v3 {
    width: var(--circle-loader-v3-size); // loader width
    height: var(--circle-loader-v3-size); // loader height
    
    .circle-loader__circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: var(--color-primary); // loader color
      transform: scale(0);
      opacity: 0.8;
      will-change: transform, opacity;
      animation: circle-loader-3 1.2s infinite;
    }

    .circle-loader__circle--2nd {
      animation-delay: 0.6s; // this should be half the duration of animation
    }
  }
}

@keyframes circle-loader-3 {
  to {
    transform: scale(1);
    opacity: 0;
  }
}

// loader v4 - eclipse
@supports (animation-name: this) {
  .circle-loader--v4 {
    width: var(--circle-loader-v4-size); // loader width
    height: var(--circle-loader-v4-size); // loader height
    border-radius: 50%;
    overflow: hidden;

    .circle-loader__mask,
    .circle-loader__circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }

    .circle-loader__mask {
      clip-path: circle(calc(0.5* var(--circle-loader-v4-size))); // fix iOS issue - it needs to be = half size of loader
    }

    .circle-loader__circle--1st {
      background-color: var(--color-contrast-low); // loader base color
    }

    .circle-loader__circle--2nd {
      background-color: var(--color-primary); // loader fill color
      will-change: transform;
      transform-origin: 50% 100%;
      animation: circle-loader-4 1.2s infinite cubic-bezier(.23,.9,.75,.1);
      transform: translateX(-100%);
    }
  }
}

@keyframes circle-loader-4 {
  to {
    transform: translateX(100%);
  }
}

// loader v5 - bounce
@supports (animation-name: this) {
  .circle-loader--v5 {
    font-size: var(--circle-loader-v5-size); // loader size - if you edit this value all elements scale accordingly
    width: 1em;
    height: 1em;

    .circle-loader__label {
      font-size: 1rem;
    }

    .circle-loader__ball {
      position: absolute;
      top: 0;
      left: calc(50% - 0.140625em);
      width: 0.28125em;
      height: 0.28125em;
      background-color: var(--color-primary);
      border-radius: 50%;
      animation: circle-loader-5-ball 0.8s infinite;
    }

    .circle-loader__shadow {
      position: absolute;
      bottom: 0;
      left: calc(50% - 0.15625em);
      width: 0.3125em;
      height: 0.3125em;
      background-color: var(--color-contrast-lower);
      border-radius: 50%;
      transform: scaleY(0.4) scaleX(1.2);
      animation: circle-loader-5-shadow 0.8s infinite;
    }
  }
}

@keyframes circle-loader-5-ball {
  0% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(.61,.12,.85,.4);
  }

  50% {
    transform: translateY(0.5625em);
    animation-timing-function: cubic-bezier(.12,.59,.46,.95);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes circle-loader-5-shadow {
  0% {
    transform: scaleY(0.4) scaleX(1.2);
    background-color: var(--color-contrast-lower);
    animation-timing-function: cubic-bezier(.61,.12,.85,.4);
  }

  50% {
    transform: scaleY(0.2) scaleX(0.6);
    background-color: var(--color-contrast-low);
    animation-timing-function: cubic-bezier(.12,.59,.46,.95);
  }

  100% {
    transform: scaleY(0.4) scaleX(1.2);
    background-color: var(--color-contrast-lower);
  }
}

// loader v6 - worm
@supports (animation-name: this) {
  .circle-loader--v6 {
    .circle-loader__svg {
      display: block;
      width: var(--circle-loader-v6-size);
      height: var(--circle-loader-v6-size);
      color: var(--color-primary); // loader color
    }

    .circle-loader__fill {
      stroke-width: 8px; // loader stroke width
      stroke-dashoffset: 35;
      stroke-dasharray: 36 36;
      animation: circle-loader-6 1.5s infinite;
    }
  }
}

@keyframes circle-loader-6 {
  0%, 100% {
    stroke-dashoffset: 35;
  }

  50% {
    stroke-dashoffset: -35;
  }
}
</style>
