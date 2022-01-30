import Vue from 'vue'
import VueRouter from 'vue-router'

// Import route groups
import pagesRoutes from '@/pages/pages-routes.js'
import appRoutes from '@/app/app-routes.js'

Vue.use(VueRouter)

export const routes = [
    ...pagesRoutes,
    ...appRoutes,
];

const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes,
})

export default router
