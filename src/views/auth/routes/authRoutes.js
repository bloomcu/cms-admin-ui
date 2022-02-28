import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import ForgotPassword from '@/views/auth/ForgotPassword.vue';

export default [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        // component: Register,
        redirect: "/login"
    },
    {
        path: "/forgot-password",
        name: "forgotPassword",
        component: ForgotPassword,
    },
]
