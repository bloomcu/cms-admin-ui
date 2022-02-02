import MenuEditor from '@/views/menu-editor/MenuEditor.vue';

export default [
    {
        path: "/menu-editor/:id",
        name: "menuEditor",
        component: MenuEditor,
        props: true,
    }
]
