import PostEditor from '@/views/post-editor/PostEditor.vue';

export default [
    {
        path: "/post-editor/:id",
        name: "postEditor",
        component: PostEditor,
        props: true,
    }
]
