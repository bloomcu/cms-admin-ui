import Vue from 'vue'
import VueRouter from 'vue-router'

// Import route groups
import dashboardRoutes from '@/views/dashboards/routes/dashboardRoutes.js'
import postEditorRoutes from '@/views/post-editor/routes/postEditorRoutes.js'
import appRoutes from '@/app/routes/appRoutes.js'

Vue.use(VueRouter)

export const routes = [
    ...dashboardRoutes,
    ...postEditorRoutes,
    ...appRoutes,
];

const router = new VueRouter({
    base: '/',
    mode: 'history',
    linkActiveClass: 'active',
    routes,
})

export default router
