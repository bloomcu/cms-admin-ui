<template>
    <AppModal v-if="store.isShowingSettings" @close="store.isShowingSettings = false">
        <div class="header-page-settings max-width-lg">
            <!-- Left column -->
            <div class="column-left utility__scrollable">
                <div class="column-left__content flex flex-column justify-between height-100%">
                    <div>
                        <h4 class="margin-bottom-sm">Settings</h4>
                        <div
                            v-for="item in ['General', 'Blueprint', 'SEO', 'Social Media']"
                            :class="activeMenu === item ? 'menu-item--active' : ''"
                            @click="activeMenu = item"
                            class="menu-item"
                        >
                            {{ item }}
                        </div>
                    </div>
                    <AppSaveButton @clicked="store.update()" :loading="store.isSaving">Save</AppSaveButton>
                </div>
            </div>

            <!-- Right column -->
            <div class="column-right utility__scrollable">
                <GeneralSettings v-if="activeMenu === 'General'" />
                <BlueprintSettings v-if="activeMenu === 'Blueprint'" />
                <SEOSettings v-if="activeMenu === 'SEO'" />
                <SocialMediaSettings v-if="activeMenu === 'Social Media'" />
            </div>
        </div>
    </AppModal>
</template>

<script setup>
import { postStore } from '@/domain/posts/store/postStore'

const store = postStore()
const activeMenu = ref('General')
</script>

<style lang="scss" scoped>
.header-page-settings {
    display: flex;
    min-height: 90vh;
    max-height: 90vh;

    .column-left {
        width: 300px;
        min-width: 300px;
        border-radius: var(--radius-md) 0 0 var(--radius-md);

        &__content {
            padding: var(--space-md);
        }

        .menu-item {
            margin-bottom: var(--space-xxxs);
            padding: var(--space-xxs);
            border-radius: var(--radius);
            cursor: pointer;

            &:hover {
                background-color: alpha(var(--color-contrast-higher), 0.05);
            }

            &--active {
                background-color: alpha(var(--color-primary), 0.1);
                color: var(--color-primary);
            }
        }
    }

    .column-right {
        width: 700px;
        min-width: 700px;
        padding: var(--space-md) var(--space-lg);
    }
}
</style>
