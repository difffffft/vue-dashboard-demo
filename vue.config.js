module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/theme/element.scss";`,
      },
    },
  },
};
