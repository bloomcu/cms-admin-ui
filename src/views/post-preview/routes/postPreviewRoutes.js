import PostPreview from '@/views/post-preview/PostPreview.vue';

export default [
    {
        path: "/post-preview/:post",
        name: "postPreview",
        component: PostPreview,
        props: true,
    }
]
