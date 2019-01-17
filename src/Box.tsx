import { styledWithVariants, div } from '@hungry/sassy-react-component'

import { withRibbon, WithRibbon } from './Ribbon'
import { combineCSSDefinitions, combineCSSWithModifiers, WithModifiers } from './modifiers'

import CSS, { BEM } from './Box.sass'

const asBulmaVariant =
  styledWithVariants<WithModifiers<WithRibbon<BEM>>>(
    combineCSSWithModifiers(
      combineCSSDefinitions(withRibbon, CSS)))

export const Box =
  asBulmaVariant('box')
    (div)