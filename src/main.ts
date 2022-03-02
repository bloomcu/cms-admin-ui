import Vue, { VNode }  from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from '@/App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import router from '@/router'
import '/node_modules/vite-component-library/dist/style.css'

Vue.use(VueCompositionApi)
Vue.use(PiniaVuePlugin)

const pinia = createPinia()

new Vue({
    pinia,
    router,
    render: (h): VNode => h(App),
}).$mount('#app');

Vue.config.productionTip = false
Vue.config.devtools = true

// const firebaseConfig = {
//   apiKey: "AIzaSyBbvJYJIlX9amLfk-RRMf9VpMh7hYkzdnQ",
//   authDomain: "bloomcu-auth-service.firebaseapp.com",
//   projectId: "bloomcu-auth-service",
//   storageBucket: "bloomcu-auth-service.appspot.com",
//   messagingSenderId: "50575323133",
//   appId: "1:50575323133:web:33198098b89678eb847394"
// }

// initializeApp(firebaseConfig);
// firebase.getCurrentUser = () => {
//     return new Promise((resolve, reject) => {
//         const unsubscribe = getAuth().onAuthStateChanged(user => {
//             unsubscribe();
//             resolve(user);
//         }, reject);
//     })
// };
