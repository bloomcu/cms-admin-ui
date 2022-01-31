import PostShow from '@/posts/views/PostShow.vue';

export default [
    {
        path: "/posts/:post",
        name: "postShow",
        component: PostShow,
        props: true,
    }
]
