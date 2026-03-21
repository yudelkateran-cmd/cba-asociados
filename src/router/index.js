import { createRouter, createWebHashHistory } from 'vue-router'
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
  // CAMBIO CLAVE: Usamos createWebHashHistory para máxima compatibilidad con GitHub Pages
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router