import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import Password from '@/views/auth/Password.vue';
import People from '@/views/auth/People.vue';
import Organization from '@/views/auth/Organization.vue';
import Property from '@/views/auth/Property.vue';

export default [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/password",
        name: "password",
        component: Password,
    },
    {
        path: "/people",
        name: "people",
        component: People,
        meta: {
          authRequired: true,
        }
    },
    {
        path: "/organization",
        name: "organization",
        component: Organization,
        meta: {
          authRequired: true,
        }
    },
    {
        path: "/property",
        name: "property",
        component: Property,
        meta: {
          authRequired: true,
        }
    },  
]
