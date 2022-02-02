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
    },
    {
        path: "/articles",
        name: "articleDashboard",
        component: ArticleDashboard,
    },
    {
        path: "/blueprints",
        name: "blueprintDashboard",
        component: BlueprintDashboard,
    },
    {
        path: "/blocks",
        name: "blockDashboard",
        component: BlockDashboard,
    },
    {
        path: "/files",
        name: "fileDashboard",
        component: FileDashboard,
    },
    {
        path: "/menus",
        name: "menuDashboard",
        component: MenuDashboard,
    }
]
