import PageDashboard from '@/views/dashboards/PageDashboard.vue';
import ArticleDashboard from '@/views/dashboards/ArticleDashboard.vue';
import BlueprintDashboard from '@/views/dashboards/BlueprintDashboard.vue';
import BlockDashboard from '@/views/dashboards/BlockDashboard.vue';

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
    }
]
