'use strict';

const webpack        = require('webpack');
const path           = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = (extension) => {
  const isTS = extension === 'ts';
  const rules = [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: [/node_modules/, path.resolve(__dirname, `src/${extension}/modules/dep`)],
      options: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-do-expressions', 'transform-function-bind']
      }
    }
  ];

  if (isTS) {
    rules.push({
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: [/node_modules/, path.resolve(__dirname, `src/${extension}/modules/dep`)],
    });
  }

  return {
    // Entry point
    entry: {
      'js/index': `./src/${extension}/index`
    },

    // Output settings
    output: {
      filename: '[name].js'
    },

    // Webpack's plugins
    plugins: [
      new WebpackMd5Hash(),

      new webpack.NoEmitOnErrorsPlugin()
    ],

    // Configure module loading (paths, default paths)
    resolve: {
      extensions: isTS ? ['.ts', '.js'] : ['.js'],
      modules: [
        path.join(__dirname, 'src'),
        'node_modules'
      ],
      alias: {
        "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
        "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
        "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
        "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
        "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
        "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
      },
    },

    module: {
      loaders: [
        { test: /\.js$/, loader: 'imports-loader?define=>false'}
      ],
      rules: rules,
    }
  };
};
