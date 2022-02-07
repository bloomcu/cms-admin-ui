import AppHome from '@/app/views/AppHome.vue';
import App404 from '@/app/views/App404.vue';

export default [
    // {
    //     path: "/",
    //     name: "appHome",
    //     component: AppHome,
    // },
    {
        path: "/",
        name: "appHome",
        redirect: "/pages"
    },
    {
        path: "/:path(.*)",
        name: "app404",
        component: App404,
    } 
]
