import { Omit } from 'utility-types'
import { withVariants, Primitives } from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'
import CSS, { BEM, Block } from './Tag.sass'

type Variants = WithModifiers<BEM>

const asBulmaVariant =
  withVariants<Variants>(
    combineCSSWithModifiers(CSS))

export const Tag =
  asBulmaVariant('tag')
    (Primitives.span)

export const Tags =
  asBulmaVariant('tags')
    (Primitives.span)

export type TagVariants = Omit<Variants, Block>
