import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// import appRouter from './appRouter'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/layout/Index.vue'),
    children: [
      {
        path: '/home',
        name: 'HomeIndex',
        component: () => import('@/views/home/Index.vue'),
      },
      {
        path: '/account',
        name: 'AccountIndex',
        component: () => import('@/views/account/Index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'LoginIndex',
    component: () => import('@/views/login/Index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
