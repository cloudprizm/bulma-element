import { styledWithVariants, div } from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'
import StaticCSS, { BEM } from './Content.sass'

const asBulmaVariant =
  styledWithVariants<WithModifiers<BEM>>(
    combineCSSWithModifiers(StaticCSS))

export const Content = asBulmaVariant('content')(div)
