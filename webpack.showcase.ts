import { Configuration, minimalTypescriptWithSass } from '@hungry/webpack-parts'
import { theme } from '@hungry/bulma-theme'
import { injectSassVarLoader } from '@hungry/webpack-sass-theme-loader'

export const config =
  (cfg: Configuration) =>
    minimalTypescriptWithSass(cfg)
      .map(injectSassVarLoader(theme))
      .run({
        env: 'development',
        target: 'web'
      })

export default config