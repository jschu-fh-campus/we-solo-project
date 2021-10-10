const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WebpackObfuscator({
      rotateStringArray: true,
    }),
  ],
  // webpack loader rules array
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'post',
        use: {
          loader: WebpackObfuscator.loader,
          options: {
            rotateStringArray: true,
          },
        },
      },
    ],
  },
});