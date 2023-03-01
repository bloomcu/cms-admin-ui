<template>
  <div class="app">
      <AppNavbar/>

      <div class="app__wrapper">
          <DashboardNavigation/>

          <main class="app__body app__body--wide">
              <slot/>
          </main>
      </div>
  </div>
</template>
