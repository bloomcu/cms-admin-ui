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
        path: "/pages/:pageId",
        name: "pageShow",
        component: PageShow,
        props: true,
    }
]
