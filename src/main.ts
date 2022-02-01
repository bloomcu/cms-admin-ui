import Vue, { VNode }  from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from '@/App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import router from '@/router'
import '@/app/styles/styles.scss'

Vue.use(VueCompositionApi)
Vue.use(PiniaVuePlugin)

Vue.config.productionTip = false
Vue.config.devtools = true

const pinia = createPinia()

new Vue({
    router,
    pinia,
    render: (h): VNode => h(App),
}).$mount('#app');
