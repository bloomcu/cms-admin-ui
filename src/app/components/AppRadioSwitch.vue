<template>
  <ul class="radio-switch ">
    <li class="radio-switch__item">
      <input @click="select('page')" class="radio-switch__input sr-only" type="radio" name="radio-switch-name" id="radio-1" value="" checked>
      <label class="radio-switch__label" for="radio-1">Pages</label>
    </li>

    <li class="radio-switch__item">
      <input @click="select('article')" class="radio-switch__input sr-only" type="radio" name="radio-switch-name" id="radio-2" value="">
      <label class="radio-switch__label" for="radio-2">Articles</label>
      <div aria-hidden="true" class="radio-switch__marker"></div>
    </li>
  </ul>
</template>

<script setup>
const select = (selection) => {
    emit('selected', selection)
}

const emit = defineEmits(['selected'])
</script>

<style lang="scss">
:root {
  // style
  --radio-switch-width: 186px;
  --radio-switch-height: 46px;
  --radio-switch-padding: 3px;
  --radio-switch-radius: 50em;

  // animation
  --radio-switch-animation-duration: 0.2s;
}

.radio-switch {
  position: relative;
  display: inline-block; // flexbox fallback
  display: inline-flex;
  padding: var(--radio-switch-padding);
  border-radius: calc(var(--radio-switch-radius) * 1.4);
  background-color: var(--color-bg-darker);

  // &:focus-within, &:active {
  //   box-shadow: 0 0 0 2px alpha(var(--color-contrast-higher), 0.15); // focus effect
  // }
}

.radio-switch__item {
  position: relative;
  display: inline-block; // flexbox fallback
  height: calc(var(--radio-switch-height) - 2*var(--radio-switch-padding));
  width: calc(var(--radio-switch-width)*0.5 -  var(--radio-switch-padding));
}

.radio-switch__label {
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: var(--radio-switch-radius);
  cursor: pointer;
  font-size: var(--text-sm);
  user-select: none;
  transition: all var(--radio-switch-animation-duration);

  .radio-switch__input:checked ~ & {
    color: var(--color-white);
  }

  .radio-switch__input:focus ~ & { // focus effect in browsers not supporting :focus-within
    background-color: lightness(var(--color-primary), 0.6);
  }

  :not(*):focus-within, // trick to detect :focus-within support -> https://css-tricks.com/using-feature-detection-conditionals-and-groups-with-selectors/
  .radio-switch__input:focus ~ & { // reset focus style for browsers supporting :focus-within
    background-color: transparent;
  }
}

.radio-switch__marker {
  position: absolute;
  z-index: 1;
  top: 0;
  left: -100%;
  border-radius: var(--radio-switch-radius);
  background-color: var(--color-primary);
  height: calc(var(--radio-switch-height) - 2*var(--radio-switch-padding));
  width: calc(var(--radio-switch-width)*0.5 -  var(--radio-switch-padding));
  transition: transform var(--radio-switch-animation-duration);

  .radio-switch__input:checked ~ & {
    transform: translateX(100%);
  }
}
</style>
