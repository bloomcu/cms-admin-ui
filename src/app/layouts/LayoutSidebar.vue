<template>
    <div class="app">
        <AppNavbar/>

        <div class="app__wrapper">
            <AppSidebar/>

            <main class="app__body">
                <slot/>
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* --------------------------------
App
-------------------------------- */
.app {
    // background-color: var(--color-contrast-lower);
    // background-color: #fafafa;
}

/* --------------------------------
App Wrapper
-------------------------------- */
.app__wrapper {
    display: flex;
}

/* --------------------------------
App Body
-------------------------------- */
.app__body {
    display: flex;
    flex-direction: column;
    width: 75rem;
    margin: 0 auto;
    position: relative;
    padding: var(--space-md) var(--space-md) var(--space-sm) 0;
    min-height: calc(100vh - var(--app-ui-header-height));
}
</style>
