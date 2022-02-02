import Vue from 'vue'
import VueRouter from 'vue-router'

// Import route groups
import dashboardRoutes from '@/views/dashboards/routes/dashboardRoutes.js'
import postEditorRoutes from '@/views/post-editor/routes/postEditorRoutes.js'
import postPreviewRoutes from '@/views/post-preview/routes/postPreviewRoutes.js'
import menuEditorRoutes from '@/views/menu-editor/routes/menuEditorRoutes.js'
import appRoutes from '@/app/routes/appRoutes.js'

Vue.use(VueRouter)

export const routes = [
    ...dashboardRoutes,
    ...postEditorRoutes,
    ...postPreviewRoutes,
    ...menuEditorRoutes,
    ...appRoutes,
];

const router = new VueRouter({
    base: '/',
    mode: 'history',
    linkActiveClass: 'active',
    routes,
})

export default router
