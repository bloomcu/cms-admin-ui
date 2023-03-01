<template>
  <div class="app">
      <AppNavbar/>

      <div class="app__wrapper">
          <AuthNavigation/>

          <main class="app__body">
              <slot/>
          </main>
      </div>
  </div>
</template>
