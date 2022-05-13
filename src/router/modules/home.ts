import { RouteRecordRaw } from 'vue-router';

export const homeRouters = [
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
];

export const homeRoute: RouteRecordRaw = {
  path: '/',
  component: () => import('@/layout/Index.vue'),
  redirect: '/home',
  children: [...homeRouters],
};
