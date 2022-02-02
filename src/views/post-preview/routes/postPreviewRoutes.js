import PostPreview from '@/views/post-preview/PostPreview.vue';

export default [
    {
        path: "/post-preview/:id",
        name: "postPreview",
        component: PostPreview,
        props: true,
    }
]
