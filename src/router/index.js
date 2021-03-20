import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/units', name: 'Units', component: () => import('../views/Units.vue') },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
