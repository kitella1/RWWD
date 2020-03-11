module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/variables.scss";`
      }
    }
  },
  devServer: {
    host: 'localhost'
    }
};