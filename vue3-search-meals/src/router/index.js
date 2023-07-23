import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        component: () => import('../components/DefaultLayout.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/Home.vue'),
              },
              {
                path: '/by-name/:name?',
                name: 'byName',
                component: () => import('../views/MealsByName.vue'),
              },
              {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: () => import('../views/MealsByLetter.vue'),
              },
              {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: () => import('../views/MealsByIngredient.vue'),
              },
              {
                path: '/meal/:id?',
                name: 'mealDetails',
                component: () => import('../views/MealDetails.vue'),
              },
        ]
      },   
      {
        path: '/guest',
        component: () => import('../components/GuestLayout.vue'),
      } 
  ],
});

export { router };
