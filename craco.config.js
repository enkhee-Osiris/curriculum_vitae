const path = require('path');

const WebpackWindiCSSPlugin = require("windicss-webpack-plugin").default;

module.exports = {
  webpack: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components/"),
    },
    configure: webpackConfig => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === "ModuleScopePlugin"
      );

      if (scopePluginIndex > -1) {
        webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      }

      webpackConfig.plugins.push(
        new WebpackWindiCSSPlugin({
          scan: {
            dirs: ["./src", "./public"],
            fileExtensions: ["jsx", "js", "html"],
            exclude: ["node_modules", ".git"]
          }
        })
      );

      return webpackConfig;
    }
  }
};
