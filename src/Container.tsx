import { styledWithVariants, div } from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'
import StaticCSS, { BEM } from './Container.sass'

const asBulmaVariant =
  styledWithVariants<WithModifiers<BEM>>(
    combineCSSWithModifiers(StaticCSS))

export const Container =
  asBulmaVariant('container')
    (div)