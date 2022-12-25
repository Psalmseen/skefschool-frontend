import { Route, Router } from '@vaadin/router';

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
        path: '/staff',
        component: 'staff-page',
        action: async () => {
          await import('../pages/staff-page/staff-page');
        },
      },
      {
        path: '/classes',
        component: 'class-page',
        action: async () => {
          await import('../pages/class-page/class-page');
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
