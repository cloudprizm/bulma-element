import { Omit } from 'utility-types'
import { styledWithVariants, span } from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'
import CSS, { BEM, Block } from './Tag.sass'

type Variants = WithModifiers<BEM>

const asBulmaVariant =
  styledWithVariants<Variants>(
    combineCSSWithModifiers(CSS))

export const Tag =
  asBulmaVariant('tag')
    (span)

export const Tags =
  asBulmaVariant('tags')
    (span)

export type TagVariants = Omit<Variants, Block>
