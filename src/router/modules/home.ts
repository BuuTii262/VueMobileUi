import { RouteRecordRaw } from 'vue-router';

export const homeRouters = [
  {
    path: '/home',
    name: 'HomeIndex',
    meta: {
      title: 'home',
      icon: './images/tabbar/home.png',
      icon_select: './images/tabbar/home_select.png',
    },
    component: () => import('@/views/home/Index.vue'),
  },
  {
    path: '/account',
    name: 'AccountIndex',
    meta: {
      title: 'account',
      icon: './images/tabbar/account.png',
      icon_select: './images/tabbar/account_select.png',
    },
    component: () => import('@/views/account/Index.vue'),
  },
];

export const homeRoute: RouteRecordRaw = {
  path: '/',
  component: () => import('@/layout/Home.vue'),
  redirect: '/home',
  children: [...homeRouters],
};
