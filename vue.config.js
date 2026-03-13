const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // 1. CONFIGURACIÓN PARA GITHUB PAGES
  // Esto asegura que los archivos se busquen en la carpeta del repo
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cba-asociados/'
    : '/',

  // 2. CONFIGURACIÓN DE CSS/SASS
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          // Esto silencia las advertencias de deprecación (muy útil)
          quietDeps: true, 
        },
      },
    },
  },
})