import { styledWithVariants, div } from '@hungry/sassy-react-component'

import { withRibbon, WithRibbon } from './Ribbon'
import { combineCSSDefinitions } from './modifiers'

import CSS, { BEM } from './Box.sass'

const asBulmaVariant =
  styledWithVariants<WithRibbon<BEM>>(
    combineCSSDefinitions(withRibbon, CSS))

export const Box =
  asBulmaVariant('box')
    (div)