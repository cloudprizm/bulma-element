const { enableRuntimeTranspilation } = require('@hungry/babel-preset-cli')
enableRuntimeTranspilation()

module.exports = (baseConfig, env, defaultConfig) =>
  require('../webpack.storybook')
    .default(defaultConfig)