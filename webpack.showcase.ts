import { Configuration, minimalTypescriptWithSass } from '@hungry/webpack-parts'
import { theme } from '@hungry/bulma-theme'
import { injectSassVarLoader } from '@hungry/webpack-sass-theme-loader'
import { resolve } from 'path'

export const config =
  (cfg: Configuration) =>
    minimalTypescriptWithSass(cfg)
      .map(injectSassVarLoader(theme))
      .run({
        env: 'development',
        target: 'web',
        dist: resolve(__dirname, './docs')
      })

export default config