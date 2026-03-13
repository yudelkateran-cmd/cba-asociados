<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="@/assets/image/logo.png" alt="CBA Logo" width="50" height="40" class="me-2">
        <span class="brand-text">CBA & ASOCIADOS</span>
      </router-link>

      <button 
        class="navbar-toggler border-0" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link custom-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link custom-link" to="/proyectos">Proyectos</router-link>
          </li>
          
          <li class="nav-item dropdown">
          <a 
            class="nav-link dropdown-toggle custom-link" 
            href="#" 
            role="button" 
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Servicios
          </a>
          <ul class="dropdown-menu dropdown-menu-dark border-0 shadow-lg p-3">
            <li class="dropdown-header text-primary fw-bold px-3">Nuestras Especialidades</li>
            <li><span class="dropdown-item-text text-white-50 small">Topografía de Precisión</span></li>
            <li><span class="dropdown-item-text text-white-50 small">Proyectos de Urbanismo</span></li>
            <li><span class="dropdown-item-text text-white-50 small">Diseño de Vivienda</span></li>
            <li><span class="dropdown-item-text text-white-50 small">Locales Comerciales</span></li>
            <li><span class="dropdown-item-text text-white-50 small">Cálculo de Edificios</span></li>
            <li><span class="dropdown-item-text text-white-50 small">Presupuestos de Obra</span></li>
            <li><span class="dropdown-item-text text-white-50 small">Avalúos Técnicos</span></li>
            <li><span class="dropdown-item-text text-white-50 small">Digitalización de Planos</span></li>
          </ul>
        </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Tu CSS está excelente, solo añadí un detalle para el dropdown */
.navbar-custom {
  background: rgba(15, 32, 39, 0.9); 
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 0; /* Un poco más delgado se ve más moderno */
  transition: all 0.4s ease;
}

.brand-text {
  font-family: 'Montserrat', sans-serif; /* Montserrat suele verse más técnico que Georgia */
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #ffffff;
  font-size: 1rem;
}

/* Estilo para los items del dropdown al pasar el mouse */
.dropdown-item:hover {
  background-color: #4facfe;
  color: white;
}

/* Lo demás de tu CSS se mantiene igual... */
.custom-link {
  color: rgba(255, 255, 255, 0.8) !important;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin: 0 10px;
  position: relative;
}

.router-link-active {
  color: #4facfe !important; /* El color de tu línea para resaltar */
}
.dropdown-item-text {
  cursor: default; /* Evita que salga la mano de click */
  padding: 8px 20px;
  display: block;
}
</style>