import Vue from 'vue'
import VueRouter from 'vue-router'

// Import route groups
import postRoutes from '@/posts/routes/postRoutes.js'
import pageRoutes from '@/pages/routes/pageRoutes.js'
import articleRoutes from '@/articles/routes/articleRoutes.js'
import appRoutes from '@/app/routes/appRoutes.js'

Vue.use(VueRouter)

export const routes = [
    ...postRoutes,
    ...pageRoutes,
    ...articleRoutes,
    ...appRoutes,
];

const router = new VueRouter({
    base: '/',
    mode: 'history',
    linkActiveClass: 'active',
    routes,
})

export default router
