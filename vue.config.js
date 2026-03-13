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