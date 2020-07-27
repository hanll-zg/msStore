'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  showEnv: '"develop"',
  BASE_LIST: "/occapi/",
})
