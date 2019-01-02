import { styledWithVariants, div } from '@hungry/sassy-react-component'
import { combineCSSWithModifiers, WithModifiers } from './modifiers'

import CSS, { BEM } from './Ribbon.sass'

export type WithRibbon<K = unknown> = WithModifiers<BEM & K>
export const withRibbon = combineCSSWithModifiers(CSS)

export const withBulma = styledWithVariants<WithRibbon>(withRibbon)
export const Ribbon = withBulma('ribbon')(div)