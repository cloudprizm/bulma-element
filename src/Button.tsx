import styled from 'styled-components'
import {
  styledWithVariants,
  toStyledGenericFromStringOrJSX,
  toStyledGenericFromStyledFunction
} from '@hungry/sassy-react-component'

import { WithModifiers, combineCSSWithModifiers } from './modifiers'

import CSS, { BEM } from './Button.sass'

const withEmbeddedVariants =
  styledWithVariants<WithModifiers<BEM>>(
    combineCSSWithModifiers(CSS))

export const makeButton = withEmbeddedVariants('button')

export const Button = makeButton(
  toStyledGenericFromStringOrJSX('button'))

Button.displayName = 'Button'

export const SubmitButton = makeButton(
  toStyledGenericFromStyledFunction(
    styled
      .button
      .attrs({ type: 'submit' })))

SubmitButton.displayName = 'SubmitButton'