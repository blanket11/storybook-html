const path = require('path');
const Fiber = require('fibers'); //高速化

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-viewport/register'],

  webpackFinal: async (config) => {

    config.module.rules.push(
      // SCSSを読み込ませたい
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            fiber: Fiber
          }
        }],
        include: path.resolve(__dirname, '../'),
      },
      // HTMLを読み込ませたい
      {
        test: /\.html$/,
        use: ['extract-loader', 'html-loader'],
        include: path.resolve(__dirname, '../')
      }
    );

    return config;
  }
};