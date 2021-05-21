import CompressionPlugin from 'compression-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import { InjectManifest } from 'workbox-webpack-plugin';
import { chalkError, chalkSuccess, chalkWarning, chalkProcessing } from './chalkConfig';

console.log(chalkProcessing('Generating service worker files...'));

const config = {
  entry: {},
  mode: 'production',
  plugins: [
    new CompressionPlugin({
      test: /\.js$/,
      minRatio: 1,
    }),
    new InjectManifest({
      swDest: path.resolve(__dirname, '../dist/firebase-messaging-sw.js'),
      swSrc: path.resolve(__dirname, '../src/firebase-messaging-sw.js'),
      include: [
        /\.html$/,
        /\.js$/,
        /\.css$/,
        /\.woff2$/,
        /\.jpg$/,
        /\.png$/,
      ],
      exclude: [
        /sw\.js$/,
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  target: 'webworker',
};

webpack(config).run((error, stats) => {
  if (error) {
    console.log(chalkError(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.errors.length > 0) {
    return jsonStats.errors.map(error => console.log(chalkError(error?.message || error)));
  }

  if (jsonStats.warnings.length > 0) {
    console.log(chalkWarning('Files generated with warnings: '));
    jsonStats.warnings.map(warning => console.log(chalkWarning(warning?.message || warning)));
  }

  console.log(chalkSuccess(`Service worker are built and ready at /dist!`));

  return 0;
});
