import { styledWithVariants, toStyledGenericFromStringOrJSX } from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'
import CSS, { BEM } from './ProgressBar.sass'

const asBulmaVariant =
  styledWithVariants<WithModifiers<BEM>>(
    combineCSSWithModifiers(CSS))

export const ProgressBar =
  asBulmaVariant('progress')
    (toStyledGenericFromStringOrJSX('progress'))
