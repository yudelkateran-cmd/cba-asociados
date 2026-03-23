<template>
  <div> 
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="container h-100 d-flex align-items-center justify-content-center text-center">
        <div class="hero-content glass-caption animate__animated animate__fadeIn">
          <h1 class="display-title fw-bold">INFRAESTRUCTURA DE PRECISIÓN</h1>
          <p class="subtitle lead">
            Soluciones de ingeniería y topografía integrales que transforman el entorno con rigor técnico.
          </p>
        </div>
      </div>
    </section>
    <section class="about-summary py-100 bg-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="about-image-wrapper p-3 bg-light rounded-4 shadow-sm">
              <img src="@/assets/image/ingenieria2.jpg" alt="Ingeniero CBA" class="img-fluid rounded-3 opacity-75">
            </div>
          </div>
          <div class="col-lg-6 ps-lg-5">
            <span class="cta-tagline text-primary">Más de dos décadas de excelencia</span>
            <h2 class="display-5 fw-bold text-dark mt-2 mb-4">CBA & ASOCIADOS: Tu Socio en Ingeniería</h2>
            <p class="lead text-muted mb-4">
              Fundada y liderada por el Ingeniero César Bolívar, nuestra firma acumula **más de 20 años de experiencia** ininterrumpida en el sector de la construcción e ingeniería en Chile.
            </p>
            <p class="text-muted mb-4">
              Nos especializamos en convertir desafíos complejos en soluciones técnicas viables y precisas. Desde el levantamiento topográfico inicial hasta el desarrollo urbano integral, cada proyecto se beneficia de nuestra visión experta y compromiso con la calidad.
            </p>
            <div class="d-flex gap-3">
              <div class="stat-item">
                <span class="display-6 fw-bold text-primary">20+</span>
                <span class="small text-muted d-block">Años de Exp.</span>
              </div>
              <div class="stat-item">
                <span class="display-6 fw-bold text-primary">500+</span>
                <span class="small text-muted d-block">Proyectos</span>
              </div>
              <div class="stat-item">
                <span class="display-6 fw-bold text-primary">100%</span>
                <span class="small text-muted d-block">Precisión</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
export default {
  name: 'InicioView',
  mounted() {
    // Ya no necesitamos inicializar el carrusel de Bootstrap
    
    // Animación de aparición (Intersection Observer) para los servicios
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card').forEach(card => {
      observer.observe(card);
    });
  }
}
</script>

<style scoped>
/* Hero Section con la nueva imagen */
.hero-section {
  position: relative;
  height: 90vh; /* Un poco más alto para impacto */
  background-image: url('@/assets/image/ingenieria.jpg'); /* REEMPLAZA CON TU NOMBRE DE ARCHIVO */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Efecto elegante al hacer scroll */
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(15, 32, 39, 0.6), rgba(15, 32, 39, 0.8));
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.display-title {
  font-size: 3.5rem;
  letter-spacing: 2px;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
}

.glass-caption {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
}

/* Estilos de botones y servicios (manteniendo tus originales) */
.py-120 { padding: 120px 0; }
.btn-quote {
  background-color: #4facfe;
  border: none;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
  transition: all 0.3s ease;
}
.btn-quote:hover {
  background-color: #00f2fe;
  transform: translateY(-3px);
}
.service-card { transition: all 0.3s ease; cursor: default; }
.service-card:hover { transform: translateY(-10px); }
.icon-box { font-size: 2rem; color: #4facfe; }

.quote-section { padding: 80px 0; background-color: #f8f9fa; }
.quote-box {
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
}
.py-100 { padding: 100px 0; }
.about-image-wrapper {
  position: relative;
  overflow: hidden;
}
.about-image-wrapper::after {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to bottom right, rgba(79, 172, 254, 0.2), transparent);
}
.stat-item {
  text-align: center;
  padding: 10px 20px;
  background: #f8f9fa;
  border-radius: 10px;
}
</style>