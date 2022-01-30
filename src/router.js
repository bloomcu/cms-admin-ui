import Vue from 'vue'
import VueRouter from 'vue-router'

// Import route groups
import pageRoutes from '@/pages/routes/pageRoutes.js'
import appRoutes from '@/app/routes/appRoutes.js'

Vue.use(VueRouter)

export const routes = [
    ...pageRoutes,
    ...appRoutes,
];

const router = new VueRouter({
    base: '/',
    mode: 'history',
    linkActiveClass: 'active',
    routes,
})

export default router
