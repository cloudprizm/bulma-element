import { styledWithVariants, toStyledGenericFromStringOrJSX } from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'
import CSS, { BEM } from './Icon.sass'

const asBulmaVariant =
  styledWithVariants<WithModifiers<BEM>>(
    combineCSSWithModifiers(CSS))

export const Icon =
  asBulmaVariant('icon')
    (toStyledGenericFromStringOrJSX('span'))
