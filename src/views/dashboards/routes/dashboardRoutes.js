import DashboardPages from '@/views/dashboards/DashboardPages.vue';
import DashboardArticles from '@/views/dashboards/DashboardArticles.vue';

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
    }
]
