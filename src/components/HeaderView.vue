<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="@/assets/image/logo.png" alt="CBA Logo" width="50" height="40" class="me-2">
        <span class="brand-text">CBA & ASOCIADOS</span>
      </router-link>

      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link custom-link" to="/">Inicio</router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle custom-link" href="#" id="especialidadesDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" @click.prevent="toggleDropdown">
              Nuestras Especialidades
            </a>
            
            <ul class="dropdown-menu dropdown-menu-dark border-0 shadow-lg p-2" aria-labelledby="especialidadesDropdown">
              <li><a class="dropdown-item small py-2" href="#" @click.prevent="verProyecto('topografia')">Topografía de Precisión</a></li>
              <li><a class="dropdown-item small py-2" href="#" @click.prevent="verProyecto('urbanismo')">Proyectos de Urbanismo</a></li>
              <li><a class="dropdown-item small py-2" href="#" @click.prevent="verProyecto('vivienda')">Diseño de Vivienda</a></li>
              <li><a class="dropdown-item small py-2" href="#" @click.prevent="verProyecto('calculo')">Cálculo de Edificios</a></li>
              <li><a class="dropdown-item small py-2" href="#" @click.prevent="verProyecto('locales')">Locales Comerciales</a></li>
              <li><a class="dropdown-item small py-2" href="#" @click.prevent="verProyecto('presupuesto')">Presupuesto de Obra</a></li>
              <li><a class="dropdown-item small py-2" href="#" @click.prevent="verProyecto('avaluo')">Avalúos Técnicos</a></li>
              <li><a class="dropdown-item small py-2" href="#" @click.prevent="verProyecto('planos')">Digitalización de Planos</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { Dropdown } from 'bootstrap'

export default {
  name: 'HeaderView',
  methods: {
    toggleDropdown(event) {
      const el = event.currentTarget;
      const dw = Dropdown.getOrCreateInstance(el);
      dw.toggle();
    },
    verProyecto(categoria) {
      // Esto redirige a la página de proyectos y envía la categoría como parámetro
      this.$router.push({ 
        path: '/proyectos', 
        query: { filtro: categoria } 
      });

      // Cerramos el menú colapsable en móviles después de hacer click
      const navBar = document.getElementById('navbarNav');
      if (navBar.classList.contains('show')) {
        navBar.classList.remove('show');
      }
    }
  }
}
</script>

<style scoped>
.navbar-custom {
  z-index: 1030 !important;
  /* Esto lo mantiene al frente */
}

.navbar-custom {
  background: rgba(15, 32, 39, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 0;
  transition: all 0.4s ease;
  z-index: 1030;
  /* Asegura que la navegación esté por encima de otros elementos */
}

.brand-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #ffffff;
  font-size: 1rem;
}

.custom-link {
  color: rgba(255, 255, 255, 0.8) !important;
  font-size: 0.75rem; /* Bajamos un poquito el tamaño para compensar el texto largo */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 8px; /* Reducimos el margen lateral para que quepa bien en laptops */
}

.router-link-active {
  color: #4facfe !important;
}

/* Mejora la legibilidad del dropdown sobre el contenido de la página */
.dropdown-menu {
  background: rgba(15, 32, 39, 0.98) !important;
  border: 1px solid rgba(79, 172, 254, 0.2) !important;
  z-index: 9999 !important;
}

.dropdown-item-text {
  cursor: default;
  padding: 8px 20px;
  display: block;
}
.dropdown-item {
  color: rgba(255, 255, 255, 0.7) !important;
  transition: all 0.3s ease;
}

.dropdown-item:hover {
  background-color: rgba(79, 172, 254, 0.15) !important;
  color: #4facfe !important;
  padding-left: 1.5rem !important; /* Desplazamiento suave al pasar el mouse */
}
</style>