<template>
  <div class="contacto-page">
    <header class="contact-header text-center">
      <div class="container">
        <h1 class="display-4 fw-bold text-white">Contáctanos</h1>
        <p class="lead text-white-50">CBA-Asociados: Ingeniería a tu servicio.</p>
      </div>
    </header>

    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-lg border-0 rounded-4 p-4 text-center">
            
            <form v-if="!enviadoExitoso" @submit.prevent="enviarFormulario">
              <div class="mb-3 text-start">
                <label class="form-label fw-bold">Nombre Completo</label>
                <input v-model="form.nombre" type="text" class="form-control" required>
              </div>
              <div class="mb-3 text-start">
                <label class="form-label fw-bold">Correo Electrónico</label>
                <input v-model="form.email" type="email" class="form-control" required>
              </div>
              <div class="mb-3 text-start">
                <label class="form-label fw-bold">Tipo de Servicio</label>
                <select v-model="form.servicio" class="form-select">
                  <option>Topografía</option>
                  <option>Urbanismo</option>
                  <option>Avalúos</option>
                  <option>Digitalización</option>
                </select>
              </div>
              <div class="mb-3 text-start">
                <label class="form-label fw-bold">Mensaje</label>
                <textarea v-model="form.mensaje" class="form-control" rows="4"></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100 py-3 fw-bold" :disabled="cargando">
                {{ cargando ? 'Procesando...' : 'Enviar Solicitud' }}
              </button>
            </form>

            <div v-else class="py-5 animate__animated animate__fadeIn">
              <div class="mb-4">
                <i class="bi bi-check-circle-fill text-success" style="font-size: 4rem;"></i>
              </div>
              <h2 class="fw-bold">¡Solicitud Enviada!</h2>
              <p class="text-muted">Gracias por confiar en CBA-Asociados. El Ingeniero César Bolívar ha sido notificado.</p>
              <p class="small text-primary">Redirigiendo al inicio en unos segundos...</p>
            </div>

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
      cargando: false,
      enviadoExitoso: false, // Controla qué vista ver
      form: {
        nombre: '',
        email: '',
        servicio: 'Topografía',
        mensaje: ''
      }
    }
  },
  methods: {
   methods: {
  enviarFormulario() {
    // 1. Bloqueamos el botón para dar sensación de carga
    this.cargando = true;

    // 2. Simulamos un pequeño procesamiento de 1 segundo
    setTimeout(() => {
      this.cargando = false;
      this.enviadoExitoso = true; // Mostramos el mensaje de "¡Solicitud Enviada!"

      // 3. Esperamos 3 segundos para que el usuario lea el mensaje de éxito
      setTimeout(() => {
        
        // 4. Preparamos y disparamos el correo (mailto)
        const destinatario = "cesaraugusto6000@gmail.com";
        const asunto = `Nueva solicitud: ${this.form.servicio}`;
        const cuerpo = `Nombre: ${this.form.nombre}%0DEmail: ${this.form.email}%0DMensaje: ${this.form.mensaje}`;
        
        window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${cuerpo}`;

        // 5. Finalmente, regresamos al inicio después de abrir el correo
        // Usamos un pequeño margen extra para que el navegador procese el mailto
        setTimeout(() => {
          this.$router.push('/');
        }, 500);

      }, 3000); // <--- Este es el tiempo que se queda viendo el mensaje de éxito

    }, 1000);
  }
}
  }
}
</script>

<style scoped>
/* Tus estilos anteriores se mantienen */
.contact-header { padding: 120px 0 60px; background: #0f2027; }
.card { margin-top: -50px; }
.btn-primary { background-color: #4facfe; border: none; }
.text-success { color: #28a745 !important; }
</style>