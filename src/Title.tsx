import { styledWithVariants, toStyledGenericFromStringOrJSX } from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'
import StaticCSS, { BEM } from './Title.sass'

const asBulmaVariant =
  styledWithVariants<WithModifiers<BEM>>(
    combineCSSWithModifiers(StaticCSS))

export const Title =
  asBulmaVariant('title')
    (toStyledGenericFromStringOrJSX('h1'))

export const Subtitle =
  asBulmaVariant('subtitle')
    (toStyledGenericFromStringOrJSX('h2'))
