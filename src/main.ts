import Vue, { VNode }  from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from '@/App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import router from '@/router'
import '/node_modules/vite-component-library/dist/style.css'

const pinia = createPinia()

Vue.use(VueCompositionApi)
Vue.use(PiniaVuePlugin)

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
    pinia,
    router,
    render: (h): VNode => h(App),
}).$mount('#app');
