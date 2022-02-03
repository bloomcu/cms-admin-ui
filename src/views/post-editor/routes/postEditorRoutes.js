import PostEditor from '@/views/post-editor/PostEditor.vue'

export default [
    {
        path: "/post-editor/:id",
        name: "postEditor",
        component: PostEditor,
        props: true,
        // beforeUpdate: (to, from, next) => {
        //     // TODO: Consider abstract this route guard so it's more reusable
        //     // Use beforeEach to open close the block editor.
        //     // The store can't be initialized until Pinia is loaded
        //     // in main.ts, hence why we initialize store right here.
        //     const store = usePostEditorStore()
        //     store.showDefault()
        //     next()
        // },
    },
    {
        // View post editor with focus on a specific block
        path: "/post-editor/:id/block/:uuid",
        name: "postBlockEditor",
        component: PostEditor,
        props: true,
        // beforeEnter: (to, from, next) => {
        //     // TODO: This route guard will can allow us to have the block editor
        //     // open if you visit this route in your address bar. For example, if
        //     // someone shares a link to a block editor on this view
        //     const store = usePostEditorStore()
        //     store.showBlockEditor()
        //     next()
        // },
    }
]
