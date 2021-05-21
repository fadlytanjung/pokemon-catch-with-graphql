import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import * as loaders from './tools/loaders';

export default {
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devtool: 'eval-cheap-module-source-map', // more info:https://webpack.js.org/guides/development/#using-source-maps and https://webpack.js.org/configuration/devtool/
  entry: [
    // must be first entry to properly set public path
    './tools/webpack-public-path',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  stats: 'minimal',
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.EnvironmentPlugin({ MODE: 'local' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.ejs',
      templateParameters: {
        title: 'Tokomon',
        url: 'http://localhost:4000',
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: ['file-loader'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [loaders.woffDev],
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [loaders.ottfDev],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [loaders.svgDev],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [loaders.imageDev],
      },
      {
        oneOf: [
          {
            test: /(\.scoped\.css|\.scoped\.scss|\.scoped\.sass)$/,
            use: [
              'style-loader',
              loaders.cssModuleDev,
              loaders.postCssModuleDev,
            ],
          },
          {
            test: /(\.css|\.scss|\.sass)$/,
            use: [
              'style-loader',
              loaders.cssDev,
              loaders.postCssDev,
            ],
          },
        ],
      },
    ],
  },
};
