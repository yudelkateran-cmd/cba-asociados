<template>
  <div class="proyectos-page">
    <header class="project-header text-center">
        <div class="container">
            <span class="cta-tagline">Nuestra Trayectoria</span>
            <h1 class="display-4 cta-title text-white">Obras Destacadas</h1>
            <p class="subtitle text-white-50">Seleccione un proyecto para visualizar detalles técnicos.</p>
        </div>
    </header>

    <div class="container mb-5 project-carousel-container">
        <div id="projectCarousel" class="carousel slide shadow-premium" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="1"></button>
            </div>
            
            <div class="carousel-inner rounded-4 overflow-hidden"> 
                <div class="carousel-item active">
                    <a href="#">
                        <img src="@/assets/image/buque.jpg" class="d-block w-100 h-project" alt="Proyecto Naval">
                        <div class="carousel-caption glass-caption">
                            <h5 class="display-title text-white">Proyecto de Containers</h5>
                            <p class="subtitle text-white">Ficha técnica y logística portuaria.</p>
                        </div>
                    </a>
                </div>

                <div class="carousel-item">
                    <a href="#">
                        <img src="@/assets/image/paraiso.png" class="d-block w-100 h-project" alt="Hotel Paraíso">
                        <div class="carousel-caption glass-caption">
                            <h5 class="display-title text-white">Urbanismo Hotel Paraíso</h5>
                            <p class="subtitle text-white">Cálculo estructural y desarrollo urbano.</p>
                        </div>
                    </a>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
// Importamos el JS de Bootstrap para que el carrusel se mueva
import { Carousel } from 'bootstrap'

export default {
  name: 'ProyectosView',
  mounted() {
    // Esto asegura que el carrusel arranque apenas entras a la página
    const el = document.querySelector('#projectCarousel')
    if (el) {
        new Carousel(el, {
            interval: 3000,
            ride: 'carousel'
        })
    }
  }
}
</script>

<style scoped>
/* Tu estilo está muy bien, solo asegúrate de que las clases existan */
.proyectos-page {
    background-color: #f8f9fa;
    min-height: 100vh;
}

.project-header {
    padding: 150px 0 100px;
    background: linear-gradient(rgba(15, 32, 39, 0.85), rgba(15, 32, 39, 0.85)), 
                url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000');
    background-size: cover;
    background-position: center;
}

.project-carousel-container {
    margin-top: -60px; /* Sube el carrusel para el efecto visual */
    max-width: 1000px;
    position: relative;
    z-index: 10;
}

.h-project {
    height: 550px;
    object-fit: cover;
}

.glass-caption {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    margin: 0 20px 20px;
    padding: 20px;
}
</style>