import Vue from 'vue'
import VueRouter from 'vue-router'

// Import route groups
import dashboardRoutes from '@/views/dashboards/routes/dashboardRoutes.js'
import postRoutes from '@/views/post/routes/postRoutes.js'
import postPreviewRoutes from '@/views/post-preview/routes/postPreviewRoutes.js'
import appRoutes from '@/app/routes/appRoutes.js'

Vue.use(VueRouter)

export const routes = [
    ...dashboardRoutes,
    ...postRoutes,
    ...postPreviewRoutes,
    ...appRoutes,
];

const router = new VueRouter({
    base: '/',
    mode: 'history',
    linkActiveClass: 'active',
    routes,
})

export default router
