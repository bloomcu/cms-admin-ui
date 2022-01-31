import Post from '@/views/post/Post.vue';

export default [
    {
        path: "/posts/:post",
        name: "post",
        component: Post,
        props: true,
    }
]
