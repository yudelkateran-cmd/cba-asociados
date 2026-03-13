const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          // Esto silencia las advertencias de deprecación
          quietDeps: true, 
        },
      },
    },
  },
})
// vite.config.js
export default defineConfig({
  base: '/cba-asociados/', // El nombre exacto de tu repositorio en GitHub
  plugins: [vue()],
})