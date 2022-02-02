import Menu from '@/views/menu/Menu.vue';

export default [
    {
        path: "/menus/:id",
        name: "menu",
        component: Menu,
        props: true,
    }
]
