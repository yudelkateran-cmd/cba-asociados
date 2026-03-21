<template>
  <div class="proyectos-page">
    <header class="project-header text-center">
      <div class="container">
        <span class="cta-tagline">Nuestra Trayectoria</span>
        <h1 class="display-4 cta-title text-white">
          {{ $route.query.filtro ? 'Especialidad: ' + formatText($route.query.filtro) : 'Obras Destacadas' }}
        </h1>
        <p class="subtitle text-white-50">Resultados técnicos de CBA & ASOCIADOS.</p>
      </div>
    </header>

    <div class="container mb-5 project-carousel-container">
      <div 
        v-if="proyectosFiltrados.length > 0" 
        :key="$route.query.filtro || 'todos'" 
        id="projectCarousel" 
        class="carousel slide shadow-premium" 
        data-bs-ride="carousel"
      >
        <div class="carousel-inner rounded-4 overflow-hidden"> 
          <div 
            v-for="(proyecto, index) in proyectosFiltrados" 
            :key="proyecto.id"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <a href="#">
              <img :src="getImgUrl(proyecto.imagen)" class="d-block w-100 h-project" :alt="proyecto.titulo">
              <div class="carousel-caption glass-caption">
                <h5 class="display-title text-white">{{ proyecto.titulo }}</h5>
                <p class="subtitle text-white">{{ proyecto.subtitulo }}</p>
              </div>
            </a>
          </div>
        </div>

        <button v-if="proyectosFiltrados.length > 1" class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button v-if="proyectosFiltrados.length > 1" class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <div v-else class="text-center p-5 bg-white rounded-4 shadow-sm border">
        <h3 class="text-dark">Próximamente</h3>
        <p class="text-muted">Estamos preparando la ficha técnica de nuestros trabajos en esta área de <strong>{{ $route.query.filtro }}</strong>.</p>
        <router-link to="/proyectos" class="btn btn-outline-primary mt-3">Ver todos los proyectos</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProyectosView',
  data() {
    return {
      // IMPORTANTE: categorías en minúsculas para coincidir con el Header
      todosLosProyectos: [
        {
          id: 1,
          titulo: 'Cálculo Estructural - Edificio Empire',
          subtitulo: 'Análisis sísmico y diseño estructural completo.',
          imagen: 'empire.png', 
          categoria: 'urbanismo' 
        },
        {
          id: 2,
          titulo: 'Urbanismo Hotel Paraíso',
          subtitulo: 'Cálculo estructural y desarrollo urbano.',
          imagen: 'hotelparaiso.jpeg',
          categoria: 'calculo'
        },
        {
          id: 3,
          titulo: 'Galpón Industrial',
          subtitulo: 'Cálculo estructural y desarrollo urbano.',
          imagen: 'galpon.png',
          categoria: 'locales'
        },
      ]
    }
  },
  computed: {
    proyectosFiltrados() {
      const filtro = this.$route.query.filtro;
      if (!filtro) return this.todosLosProyectos;
      
      // Comparamos siempre en minúsculas para evitar errores
      return this.todosLosProyectos.filter(p => 
        p.categoria.toLowerCase() === filtro.toLowerCase()
      );
    }
  },
  methods: {
    getImgUrl(pic) {
      try {
        // Webpack necesita una parte de la ruta estática para funcionar con require
        return require(`@/assets/image/${pic}`);
      } catch (e) {
        console.error("Error cargando imagen:", pic, e);
        // Imagen de respaldo por si el archivo no existe
        return 'https://via.placeholder.com/1000x550?text=Imagen+No+Encontrada';
      }
    },
    formatText(text) {
      if (!text) return '';
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  }
}
</script>

<style scoped>
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
    margin-top: -60px;
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

.shadow-premium {
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}
</style>