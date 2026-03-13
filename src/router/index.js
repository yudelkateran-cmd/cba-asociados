import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ProyectosView from '@/views/ProyectosView.vue'
import ContactoView from '@/views/ContactoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: InicioView 
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: ProyectosView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  }
]

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router