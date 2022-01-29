import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from '@/App.vue'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VueCompositionApi)

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// const app = createApp({
//   render: () => h(App),
// })
// app.mount('#app')
