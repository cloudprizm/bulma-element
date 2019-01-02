import { styledWithVariants, div } from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'
import CSS, { BEM } from './Footer.sass'

const asBulmaVariant = styledWithVariants<WithModifiers<BEM>>(
  combineCSSWithModifiers(CSS))

export const Footer =
  asBulmaVariant('footer')
    (div)
