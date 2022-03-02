import PageDashboard from '@/views/dashboards/PageDashboard.vue';
import ArticleDashboard from '@/views/dashboards/ArticleDashboard.vue';
import BlueprintDashboard from '@/views/dashboards/BlueprintDashboard.vue';
import BlockDashboard from '@/views/dashboards/BlockDashboard.vue';
import FileDashboard from '@/views/dashboards/FileDashboard.vue';
import MenuDashboard from '@/views/dashboards/MenuDashboard.vue';

export default [
    {
        path: "/pages",
        name: "pageDashboard",
        component: PageDashboard,
        meta: {
          authRequired: true,
        },
    },
    {
        path: "/articles",
        name: "articleDashboard",
        component: ArticleDashboard,
        meta: {
          authRequired: true,
        },
    },
    {
        path: "/blueprints",
        name: "blueprintDashboard",
        component: BlueprintDashboard,
        meta: {
          authRequired: true,
        },
    },
    {
        path: "/blocks",
        name: "blockDashboard",
        component: BlockDashboard,
        meta: {
          authRequired: true,
        },
    },
    {
        path: "/files",
        name: "fileDashboard",
        component: FileDashboard,
        meta: {
          authRequired: true,
        },
    },
    {
        path: "/menus",
        name: "menuDashboard",
        component: MenuDashboard,
        meta: {
          authRequired: true,
        },
    }
]
