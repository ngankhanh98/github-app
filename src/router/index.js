import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/Main.vue'
import AppLayout from '../layouts/App.vue'
const routes = [
  {
    path: '/',  
    component: MainLayout,
  },
  {
    path: '/user',
    component: AppLayout,
    children: [
      {
        path: ':username',
        component: () => import('../views/Profile.vue'),
      },
      {
        path: ':username/:repository',
        component: () => import('../views/Commits.vue'),
      },
      {
        path: '', // GET ?username=abc
        component: () => import('../views/SearchResult.vue'),
        props: route => ({ username: route.query.q })
      },
    ]
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
