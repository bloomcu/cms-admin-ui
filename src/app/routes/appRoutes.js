import AppHome from '@/app/views/AppHome.vue';
import App404 from '@/app/views/App404.vue';

export default [
    // {
    //     path: "/",
    //     name: "appHome",
    //     component: AppHome,
    // },
    {
        path: '/',
        name: 'appHome',
        // component: AppHome,
        redirect: '/pages',
        meta: {
          authRequired: true,
        },
    },
    {
        path: '/:path(.*)',
        name: 'app404',
        component: App404,
        meta: {
          authRequired: true,
        },
    } 
]
