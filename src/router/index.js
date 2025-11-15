import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../components/Login.vue';

const routes = [
    { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
    history: createWebHashHistory(),  // <<< ВАЖНО
    routes,
});

// navigation guard
router.beforeEach((to, from, next) => {
    const userId = localStorage.getItem('userId');

    if (!userId && to.name !== 'Login') {
        // если нет userId и пытаемся на главную → редирект на login
        next({ name: 'Login' });
    } else if (userId && to.name === 'Login') {
        // если есть userId и пытаемся на login → редирект на main
        next({ name: 'Main' });
    } else {
        next();
    }
});

export default router;