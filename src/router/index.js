import { createRouter, createWebHistory } from 'vue-router';
import Root from '@/views/Root';
import menuRouters from '@/router/menu.router';

export const routes = [
  {
    path: '/',
    name: 'Root',
    component: Root,
    children: menuRouters,
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
