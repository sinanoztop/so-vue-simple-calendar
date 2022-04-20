const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        use: [require("nib")()],
        import: [
          path.resolve(__dirname, "./src/styles/base.styl"),
          "~nib/lib/nib/index.styl",
        ],
      },
    },
  },
};
