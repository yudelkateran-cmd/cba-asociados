// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // 1. Ignora los errores de ESLint para que te deje compilar
  lintOnSave: false,

  // 2. CONFIGURACIÓN PARA GITHUB PAGES
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cba-asociados/'
    : '/',

  // 3. CONFIGURACIÓN DE CSS/SASS
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          // Silencia advertencias de versiones viejas de Sass
          quietDeps: true, 
        },
      },
    },
  },
})