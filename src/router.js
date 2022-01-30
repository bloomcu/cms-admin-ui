import Vue from 'vue'
import VueRouter from 'vue-router'

// Import route groups
import pageRoutes from '@/pages/pageRoutes.js'
import appRoutes from '@/app/appRoutes.js'

Vue.use(VueRouter)

export const routes = [
    ...pageRoutes,
    ...appRoutes,
];

const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes,
})

export default router
