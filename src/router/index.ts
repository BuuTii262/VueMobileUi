import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { homeRoute } from './modules/home';

export const routes: Array<RouteRecordRaw> = [
  homeRoute,
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

export function setupRouter(app: App) {
  app.use(router).mount('#app');
}

export default router;
