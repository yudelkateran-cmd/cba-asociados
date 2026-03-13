import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1. Estilos de librerías
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// 2. Tus estilos personalizados (SASS)
import './assets/main.scss'

// 3. JavaScript de Bootstrap (La versión bundle ya incluye Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App).use(store).use(router).mount('#app')