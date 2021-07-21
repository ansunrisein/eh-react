const path = require('path')
const mergeBabelConfigs = require('babel-merge')
const config = require('../.babelrc')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  babel: options => mergeBabelConfigs(options, config),
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@eh': path.resolve(__dirname, '../src/'),
        },
      },
    }
  },
}
