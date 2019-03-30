/* global require, module, __dirname, process */
// ===================================================================================
//                                                                          Definition
//                                                                          ==========
const path = require('path');
const rendererConfig = {
  target: 'electron-renderer',
  resolve: {
    extensions: [ '.js', '.jsx' ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader?modules' ],
      },
      {
        test: /\.(jpeg|png)$/,
        loaders: 'url-loader',
      }
    ]
  },
  entry: {
    'renderer/app': './src/renderer/app.jsx'
  }
};
const mainConfig = {
  target: 'electron-main',
  entry: {
    'main/index': './src/main/index'
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/')
  }
};
const commonConfig = {
  node: {
    __dirname: false,
    __filename: false,
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/')
  }
};

// ===================================================================================
//                                                                          Initialize
//                                                                          ==========
const concatCommonConfig = (config) => {
  Object.keys(commonConfig).forEach(key => {
    config[key] = commonConfig[key];
  });
};
concatCommonConfig(rendererConfig);
concatCommonConfig(mainConfig);
module.exports = [ rendererConfig, mainConfig ];
