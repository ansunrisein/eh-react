/* eslint-disable */
const {override, addBabelPlugin} = require('customize-cra')

module.exports = override(addBabelPlugin('effector/babel-plugin'))
