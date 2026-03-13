<template>
  <div class="contacto-page">
    <header class="contact-header text-center">
      <div class="container">
        <h1 class="display-4 fw-bold text-white">Contáctanos</h1>
        <p class="lead text-white-50">Estamos listos para asesorarte en tu próximo proyecto de ingeniería.</p>
      </div>
    </header>

    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-lg border-0 rounded-4 p-4">
            <form @submit.prevent="enviarFormulario">
              <div class="mb-3">
                <label class="form-label fw-bold">Nombre Completo</label>
                <input type="text" class="form-control shadow-none" placeholder="Ej: Juan Pérez" required>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Correo Electrónico</label>
                <input type="email" class="form-control shadow-none" placeholder="nombre@ejemplo.com" required>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Tipo de Servicio</label>
                <select class="form-select shadow-none">
                  <option>Topografía</option>
                  <option>Urbanismo</option>
                  <option>Avalúos</option>
                  <option>Digitalización</option>
                  <option>Otros</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Mensaje</label>
                <textarea class="form-control shadow-none" rows="4" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100 py-3 fw-bold">Enviar Solicitud</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactoView',
  data() {
    return {
      // Aquí podrías guardar los datos del formulario si usas v-model
    }
  },
  methods: {
    enviarFormulario() {
      // Por ahora, solo mostraremos un mensaje para probar
      alert('¡Gracias! Tu solicitud de cotización ha sido enviada. Nos contactaremos pronto.');
      
      // Aquí es donde luego agregarías la lógica para enviar un email
      console.log("Formulario enviado");
    }
  }
}
</script>

<style scoped>
.contact-header {
  padding: 120px 0 60px;
  background: #0f2027; /* Mismo tono oscuro que tu web */
}
.card {
  margin-top: -50px; /* Efecto sobrepuesto */
}
.btn-primary {
  background-color: #4facfe;
  border: none;
}
</style>