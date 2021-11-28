/* eslint-disable */
const {override, addBabelPlugin} = require('customize-cra')
const rewireAliases = require('react-app-rewire-aliases')
const {paths} = require('react-app-rewired')
const path = require('path')

module.exports = override(
  rewireAliases.aliasesOptions({
    '@eh': path.resolve(__dirname, `${paths.appSrc}/`),
  }),
  addBabelPlugin('effector/babel-plugin'),
)
