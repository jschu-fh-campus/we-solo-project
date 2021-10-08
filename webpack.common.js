const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: path.resolve(__dirname, './src/index.ts'),
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
  ],
  // Integrate Babel in the build process
  // Define which files to use the loader
  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader', 'eslint-loader']
      },
      // CSS and SASS
      {
        test: /\.(scss|css)$/,  // load files that end with scss and css
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ]
  },
  resolve: {
    // options for resolving module requests
    extensions: ['*', '.js', '.ts']  // files to load
  }
};