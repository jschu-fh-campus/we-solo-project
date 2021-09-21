const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: path.resolve(__dirname, './src/index.js'),
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // Add plugins for webpack here
  plugins: [
    new CleanWebpackPlugin,
    new HtmlWebpackPlugin({
      title: "Basic Webpack Setup",
      template: path.resolve(__dirname, './src/index.html'),
    })
  ]
};