import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1. Primero los estilos base de librerías
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
import './assets/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
 
.instagram-hover:hover {
    background-color: #E1306C !important;
    border-color: #E1306C !important;
}

.whatsapp-hover:hover {
    background-color: #25D366 !important;
    border-color: #25D366 !important;
}
createApp(App).use(store).use(router).mount('#app')