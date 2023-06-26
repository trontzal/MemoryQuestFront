import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    exact: true
  },
  {
    path: '/MemoriaVisual',
    name: 'memoriaVisual',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MemoriaVisual.vue'),
    exact: true
  },
  {
    path: '/JuegoCartas.vue',
    name: 'juegoCartas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/JuegoCartas.vue'),
    exact: true
  },
  {
    path: '/JuegoReflejos.vue',
    name: 'juegoReflejos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/JuegoReflejos.vue'),
    exact: true
  },
  {
    path: '/PlantillaEjemplo.vue',
    name: 'plantillaEjemplo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PlantillaEjemplo.vue'),
    exact: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
