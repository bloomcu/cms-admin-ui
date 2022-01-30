import AppHome from './views/AppHome.vue';
import App404 from './views/App404.vue';

export default [
    {
        path: "/",
        name: "appHome",
        component: AppHome,
    },
    {
        path: "/:path(.*)",
        name: "app404",
        component: App404,
    } 
]
