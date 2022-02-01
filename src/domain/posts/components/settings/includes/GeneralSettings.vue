<template>
    <div>
        <div class="margin-bottom-sm text-component">
            <h4>General Settings</h4>
        </div>

        <!-- Title -->
        <div class="form-group margin-bottom-sm">
            <label class="form-label margin-bottom-xxs">Title</label>
            <input v-model="store.post.title" type="text" class="form-control width-100%">
        </div>
        
        <!-- Url -->
        <div class="form-group margin-bottom-sm">
            <div class="grid gap-xs">
                <!-- Path -->
                <div class="col-6@md">
                    <label class="form-label margin-bottom-xxs">Path</label>
                    <input v-model="store.post.path" type="text" class="form-control width-100%">
                </div>
                
                <!-- Slug -->
                <div class="col-6@md">
                    <label class="form-label margin-bottom-xxs">Slug</label>
                    <input v-model="store.post.slug" type="text" class="form-control width-100%">
                </div>
            </div>
        </div>
        
        <!-- Computed Url -->
        <div class="form-group margin-bottom-sm">
            <label class="form-label margin-bottom-xxs">Url</label>
            <div>
                <a :href="`https://${store.getUrl}`" target="_blank">{{ store.getUrl }}</a>
            </div>
        </div>
        
        <!-- Status -->
        <!-- <div class="form-group margin-bottom-sm">
            <label class="form-label margin-bottom-xxs">Status</label>
            <div class="select">
                <select v-model="store.post.is_published" name="status" id="status" class="select_input form-control width-100%">
                    <option value="true" key="published" :selected="store.post.is_published === true">Published</option>
                    <option value="false" key="draft" :selected="store.post.is_published === false">Draft</option>
                </select>
                <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
            </div>
        </div> -->

        <!-- Category -->
        <!-- <div class="margin-bottom-md">
            <label class="form-label margin-bottom-xxs">Category</label>
            <app-menu-nested
                :items="categories.data"
                @item-selected="onCategorySelected"
                class="padding-xxs border border-2 radius-md"
            />
        </div> -->
    </div>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'

const store = usePostStore()
</script>
