const { enableRuntimeTranspilation } = require('@hungry/babel-preset-cli')
enableRuntimeTranspilation()

module.exports = {
  rootPath: process.cwd(),
  webpack: require('./webpack.showcase').default,
  exclude: [/node_modules/],
  watchDirs: ['src/**/*.ts', 'examples/**/**/*.ts'],
  hostname: 'localhost',
  port: 8989
}