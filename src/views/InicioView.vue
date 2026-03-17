<template>
  <div> 
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/image/Untitleddesign3.png" class="d-block w-100 h-v-80" alt="Ingeniería Civil">
          <div class="carousel-caption d-none d-md-block glass-caption">
            <h5 class="display-title">INFRAESTRUCTURA DE PRECISIÓN</h5>
            <p class="subtitle">Soluciones técnicas que transforman el entorno urbano con los más altos estándares.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="@/assets/image/Untitleddesign2.png" class="d-block w-100 h-v-80" alt="Topografía">
          <div class="carousel-caption d-none d-md-block glass-caption">
            <h5 class="display-title">TOPOGRAFÍA AVANZADA</h5>
            <p class="subtitle">Mediciones exactas para proyectos que requieren rigor técnico y legal.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="@/assets/image/Untitleddesign.png" class="d-block w-100 h-v-80" alt="Desarrollo Urbano">
          <div class="carousel-caption d-none d-md-block glass-caption">
            <h5 class="display-title">DESARROLLO INTEGRAL</h5>
            <p class="subtitle">Transformamos terrenos en comunidades sostenibles y proyectos de vida.</p>
          </div>
        </div>
      </div> 

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>

    <section class="services-grid py-120 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <span class="cta-tagline">Nuestras Especialidades</span>
          <h2 class="display-5 fw-bold text-dark mt-2">Soluciones Integrales de Ingeniería</h2>
          <p class="text-muted mx-auto" style="max-width: 600px;">
            Más de dos décadas de experiencia técnica aplicadas a cada etapa de su proyecto.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="service-card shadow-sm h-100 p-4 bg-white rounded-4 border-0">
              <div class="icon-box mb-3"><i class="bi bi-geo-fill"></i></div>
              <h4 class="fw-bold h5">Topografía de Precisión</h4>
              <p class="text-muted small">Levantamientos exactos y replanteos para bases sólidas de construcción.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="service-card shadow-sm h-100 p-4 bg-white rounded-4 border-0">
              <div class="icon-box mb-3"><i class="bi bi-diagram-3-fill"></i></div>
              <h4 class="fw-bold h5">Urbanismos</h4>
              <p class="text-muted small">Planificación y desarrollo de entornos urbanos sostenibles y funcionales.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="service-card shadow-sm h-100 p-4 bg-white rounded-4 border-0">
              <div class="icon-box mb-3"><i class="bi bi-building-fill"></i></div>
              <h4 class="fw-bold h5">Edificios y Viviendas</h4>
              <p class="text-muted small">Diseño estructural y arquitectónico de complejos residenciales y comerciales.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="service-card shadow-sm h-100 p-4 bg-white rounded-4 border-0">
              <div class="icon-box mb-3"><i class="bi bi-shop"></i></div>
              <h4 class="fw-bold h5">Locales Comerciales</h4>
              <p class="text-muted small">Optimización de espacios de negocio con altos estándares estéticos.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="service-card shadow-sm h-100 p-4 bg-white rounded-4 border-0">
              <div class="icon-box mb-3"><i class="bi bi-calculator-fill"></i></div>
              <h4 class="fw-bold h5">Presupuestos y Avalúos</h4>
              <p class="text-muted small">Cálculos precisos y valoraciones técnicas certificadas del patrimonio.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="service-card shadow-sm h-100 p-4 bg-white rounded-4 border-0">
              <div class="icon-box mb-3"><i class="bi bi-pc-display"></i></div>
              <h4 class="fw-bold h5">Digitalización de Planos</h4>
              <p class="text-muted small">Conversión de proyectos analógicos a entornos digitales CAD de alta fidelidad.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section class="quote-section">
      <div class="container text-center">
        <div class="quote-box p-5 rounded-4 shadow-lg">
          <h2 class="display-5 fw-bold text-white mb-3">¿Tienes un proyecto en mente?</h2>
          <p class="lead text-white-50 mb-4">
            Desde topografía de precisión hasta cálculos estructurales. <br>
            Estamos listos para transformar tus ideas en realidad.
          </p>
          <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <router-link to="/contacto" class="btn btn-primary btn-lg px-5 py-3 fw-bold btn-quote">
              Cotiza con nosotros
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div> 
</template>

<script>
import { Carousel } from 'bootstrap'

export default {
  name: 'InicioView',
  mounted() {
    // Inicializar el carrusel manualmente para asegurar compatibilidad
    const myCarousel = document.querySelector('#carouselExampleCaptions')
    new Carousel(myCarousel, {
      interval: 5000,
      touch: true
    })

    // Animación de aparición (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Animamos los hijos
          entry.target.querySelectorAll('.reveal-left, .reveal-right').forEach(el => {
            el.classList.add('reveal-visible');
          });
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector('.reveal-section');
    if (section) observer.observe(section);
  }
}
</script>

<style scoped>
/* Aquí  pegar los estilos de main.scss que correspondan solo a esta página */
.h-v-80 { height: 80vh; object-fit: cover; }
.glass-caption {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
}
.quote-section {
  padding: 80px 0;
  background-color: #f8f9fa; /* Color claro para que resalte antes del footer oscuro */
}

.quote-box {
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.quote-box:hover {
  transform: translateY(-5px); /* Pequeño efecto de elevación */
}

.btn-quote {
  background-color: #4facfe;
  border: none;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
  transition: all 0.3s ease;
}

.btn-quote:hover {
  background-color: #00f2fe;
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(79, 172, 254, 0.6);
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.7) !important;
}
</style>