import styled from 'styled-components'
import {
  styledWithVariants,
  toStyledGenericFromStyledFunction,
  button,
} from '@hungry/sassy-react-component'

import { WithModifiers, combineCSSWithModifiers } from './modifiers'

import CSS, { BEM } from './Button.sass'

const withEmbeddedVariants =
  styledWithVariants<WithModifiers<BEM>>(
    combineCSSWithModifiers(CSS))

export const makeButton = withEmbeddedVariants('button')

// NO IDEA: haha without introducing button it does not work

// A: not working
// export const Button = makeButton(
//   toStyledGenericFromStringOrJSX('button'))

// B: works
// const btn = toStyledGenericFromStringOrJSX('button')
// export const Button = makeButton(btn)

export const Button = makeButton(button)

export const SubmitButton = makeButton(
  toStyledGenericFromStyledFunction(
    styled
      .button
      .attrs({ type: 'submit' })))