import PostEditor from '@/views/post-editor/PostEditor.vue';

export default [
    {
        path: "/posts/:post",
        name: "postEditor",
        component: PostEditor,
        props: true,
    }
]
