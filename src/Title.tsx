import { styledWithVariants, h1, h2 } from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'
import StaticCSS, { BEM } from './Title.sass'

const asBulmaVariant =
  styledWithVariants<WithModifiers<BEM>>(
    combineCSSWithModifiers(StaticCSS))

export const Title =
  asBulmaVariant('title')
    (h1)

export const Subtitle =
  asBulmaVariant('subtitle')
    (h2)
