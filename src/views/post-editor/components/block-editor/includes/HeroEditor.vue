<template>
    <!-- Center -->
    <div class="margin-bottom-md">
        <input v-model="block.data.center" type="checkbox" class="margin-right-xxs" id="center">
        <label class="form-label" for="invert">Center</label>
    </div>

    <!-- Fullscreen -->
    <div class="margin-bottom-md">
        <input v-model="block.data.fullscreen" type="checkbox" class="margin-right-xxs" id="fullscreen">
        <label class="form-label" for="invert">Fullscreen</label>
    </div>

    <!-- Image -->
    <div class="margin-bottom-md">
        <label class="form-label block margin-bottom-xxs">Image</label>
        <router-link :to="{ name: 'page-edit-block-files' }" class="editor__image reset">
            <div
                :style="{ 'background-image': 'url(' + `https://d25r5txdw1c9o7.cloudfront.net/fit-in/100x100/${block.data.image.src}` + ')' }"
                class="editor__image__thumbnail"
            />
            <div class="editor__image__description">
                <p>Image Title</p>
                <router-link :to="{ name: 'page-edit-block-files' }" class="btn btn--primary btn--sm">Set Image</router-link>
            </div>
        </router-link>
    </div>

    <!-- Label -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Label</label>
        <input v-model="block.data.label" class="form-control width-100%" type="text">
    </div>

    <!-- Title -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Title</label>
        <textarea v-model="block.data.title" class="form-control width-100%" type="text"></textarea>
    </div>

    <!-- Subtitle -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Subtitle</label>
        <textarea v-model="block.data.subtitle" class="form-control width-100%" rows="3" type="text"></textarea>
    </div>

    <!-- Button One -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Button One</label>
        <input v-model="block.data.buttons[0].text" class="form-control width-100% margin-bottom-xxxs" type="text">
        <input v-model="block.data.buttons[0].href" class="form-control width-100%" type="text">
    </div>

    <!-- Button Two -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Button Two</label>
        <input v-model="block.data.buttons[1].text" class="form-control width-100% margin-bottom-xxxs" type="text">
        <input v-model="block.data.buttons[1].href" class="form-control width-100%" type="text">
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.editor__image {
    display: flex;
    align-items: center;
    padding: var(--space-xxs);
    background-color: var(--color-white);
    border: 2px solid var(--color-contrast-low);
    border-radius: var(--radius-md);
    text-decoration: none;

    &__thumbnail {
        width: 80px;
        height: 80px;
        margin-right: var(--space-sm);
        display: inline-block;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        border: 1px solid var(--color-contrast-low);
        border-radius: var(--radius-md);
        transition: box-shadow;
        transition-duration: .4s;
        cursor: pointer;

        &:hover {
            box-shadow:inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
        }
    }

    &__description {
        p {
            margin-bottom: var(--space-xxs);
        }
    }
}
</style>
