import DashboardPages from '@/views/dashboards/DashboardPages.vue';
import DashboardArticles from '@/views/dashboards/DashboardArticles.vue';
import DashboardBlueprints from '@/views/dashboards/DashboardBlueprints.vue';
import DashboardBlocks from '@/views/dashboards/DashboardBlocks.vue';

export default [
    {
        path: "/pages",
        name: "pageDashboard",
        component: DashboardPages,
    },
    {
        path: "/articles",
        name: "articleDashboard",
        component: DashboardArticles,
    },
    {
        path: "/blueprints",
        name: "blueprintDashboard",
        component: DashboardBlueprints,
    },
    {
        path: "/blocks",
        name: "blockDashboard",
        component: DashboardBlocks,
    }
]
