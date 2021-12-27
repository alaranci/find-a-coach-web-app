export default [
  {
    path: '/',
    redirect: '/coaches',
  },
  {
    path: '/home',
    redirect: '/coaches',
  },
  {
    path: '/coaches',
    component: () => import('../components/Coaches.vue'),
    children: [
      {
        path: ':id',
        component: null,
        children: [
          {
            path: 'contact',
            component: null,
          },
        ],
      },
    ],
  },
  {
    path: '/contact',
    component: () => import('../components/Contact.vue'),
  },
  {
    path: '/register',
    component: () => import('../components/Register.vue'),
  },
  {
    path: '/:notFound(.*)',
    component: () => import('../components/NotFound.vue'),
  },
];
