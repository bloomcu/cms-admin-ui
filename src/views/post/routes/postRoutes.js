import Post from '@/views/post/Post.vue';

export default [
    {
        path: "/posts/:id",
        name: "post",
        component: Post,
        props: true,
    }
]
