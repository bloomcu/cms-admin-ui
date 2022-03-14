import Properties from '@/views/auth-properties/Properties.vue';

export default [
    {
        path: "/properties",
        name: "properties",
        component: Properties,
        meta: {
          authRequired: true,
        }
    }
]
