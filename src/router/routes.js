const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/HomePage.vue') },
      { path: 'destination', component: () => import('src/pages/DestinationPage.vue') },
      { path: 'crew', component: () => import('src/pages/CrewPage.vue') },
      { path: 'technology', component: () => import('src/pages/TechnologyPage.vue') },
    ]
  },
  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
