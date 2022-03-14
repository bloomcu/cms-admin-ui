import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Import route groups
import authRoutes from '@/views/auth/routes/authRoutes.js'
import authPropertiesRoutes from '@/views/auth-properties/routes/authPropertiesRoutes.js'
import dashboardRoutes from '@/views/dashboards/routes/dashboardRoutes.js'
import postCreateRoutes from '@/views/post-create/routes/postCreateRoutes.js'
import postEditorRoutes from '@/views/post-editor/routes/postEditorRoutes.js'
import postPreviewRoutes from '@/views/post-preview/routes/postPreviewRoutes.js'
import menuEditorRoutes from '@/views/menu-editor/routes/menuEditorRoutes.js'
import appRoutes from '@/app/routes/appRoutes.js'

export const routes = [
    ...authRoutes,
    ...authPropertiesRoutes,
    ...dashboardRoutes,
    ...postCreateRoutes,
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
