/* eslint-disable */
const {override, addBabelPlugin, adjustStyleLoaders} = require('customize-cra')
const rewireAliases = require('react-app-rewire-aliases')
const {paths} = require('react-app-rewired')
const path = require('path')

module.exports = override(
  rewireAliases.aliasesOptions({
    '@eh': path.resolve(__dirname, `${paths.appSrc}/`),
  }),
  addBabelPlugin('effector/babel-plugin'),
  adjustStyleLoaders(({test, use: [, css]}) => {
    if (test.toString().match('module.+sass')) {
      css.options.modules.auto = true
      css.options.modules.exportLocalsConvention = 'dashes'
    }
  }),
)
