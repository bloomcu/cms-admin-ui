<template>
    <div class="app">
        <AppNavbar/>

        <div class="app__wrapper">
            <slot name="sidebar"></slot>

            <main class="app__body">
                <slot/>
            </main>
        </div>
    </div>
</template>
