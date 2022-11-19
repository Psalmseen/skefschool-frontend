import { Route, Router } from '@vaadin/router';
import { action } from 'mobx';

const routes: Route[] = [
  {
    path: '/',
    component: 'index-page',
    action: async () => {
      await import('../index');
    },
    children: [
      {
        path: '',
        component: 'landing-page',
        action: async () => {
          await import('../pages/landing-page/landing-page');
        },
      },
      {
        path: 'dashboard',
        component: 'dashboard-page',
        action: async () => {
          await import('../pages/dashboard-page/dashborad-page');
        },
      },
      {
        path: '/add-staff',
        component: 'add-staff-page',
        action: async () => {
          await import('../pages/add-staff/add-stuff');
        },
      },
    ],
  },
  {
    path: '/login',
    component: 'login-page',
    action: async () => {
      await import('../pages/login-page/login-page');
    },
  },
];
export const router = new Router(document.querySelector('#outlet'));

router.setRoutes(routes);
