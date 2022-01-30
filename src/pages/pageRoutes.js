import PageIndex from './views/PageIndex.vue';
import PageShow from './views/PageShow.vue';

export default [
    {
        path: "/pages",
        name: "pageIndex",
        component: PageIndex,
        props: true,
    },
    {
        path: "/pages/:page",
        name: "pageShow",
        component: PageShow,
        props: true,
    }
]
