import Vue, { VNode }  from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from '@/App.vue'
import { initializeApp } from 'firebase/app';
import { createPinia, PiniaVuePlugin } from 'pinia'
import router from '@/router'
import '/node_modules/vite-component-library/dist/style.css'

const pinia = createPinia()

Vue.use(VueCompositionApi)
Vue.use(PiniaVuePlugin)

const firebaseConfig = {
  apiKey: "AIzaSyBbvJYJIlX9amLfk-RRMf9VpMh7hYkzdnQ",
  authDomain: "bloomcu-auth-service.firebaseapp.com",
  projectId: "bloomcu-auth-service",
  storageBucket: "bloomcu-auth-service.appspot.com",
  messagingSenderId: "50575323133",
  appId: "1:50575323133:web:33198098b89678eb847394"
}

initializeApp(firebaseConfig);

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
    pinia,
    router,
    render: (h): VNode => h(App),
}).$mount('#app');
