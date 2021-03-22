const routes = [
  { path: '', name: 'Home', component: () => import('./views/Home.vue') },
  {
    path: '/units',
    name: 'Units',
    component: () => import('./views/Units.vue'),
  },
  {
    path: '/units/:id/details',
    name: 'UnitDetail',
    component: () => import('./views/UnitDetail.vue'),
  },
];

export default routes;
