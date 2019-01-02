import styled from 'styled-components'
import { Omit } from 'utility-types'

import {
  styledWithVariants,
  toStyledGenericFromStringOrJSX,
  Primitives,
  toStyledGenericFromStyledFunction
} from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'

import CSS, { BEM, Block } from './Form.sass'

const makeInput = (type?: string) =>
  toStyledGenericFromStyledFunction(styled.input.attrs({ type }))

type Variants = WithModifiers<BEM>

const lookup = combineCSSWithModifiers(CSS)
const asBulmaVariant = styledWithVariants<Variants>(lookup)

export const Form = asBulmaVariant('form')(Primitives.form)
export const Field = asBulmaVariant('field')(Primitives.div)
export const Control = asBulmaVariant('control')(Primitives.div)
export const Help = asBulmaVariant('help')(Primitives.div)

export const Input = asBulmaVariant('input')(makeInput('text'))
export const Password = asBulmaVariant('input')(makeInput('password'))
export const TextArea = asBulmaVariant('textarea')(toStyledGenericFromStringOrJSX('textarea'))
export const Label = asBulmaVariant('label')(Primitives.label)

export const Checkbox = asBulmaVariant('checkbox')(makeInput('checkbox'))
export const Radio = asBulmaVariant('radio')(makeInput('radio'))

export const File = {
  Block: asBulmaVariant('file')(Primitives.div),
  Label: asBulmaVariant('label')(Primitives.label),
  InlineLabel: asBulmaVariant('label')(Primitives.span),
  CTA: asBulmaVariant('fileCta')(Primitives.span),
  Icon: asBulmaVariant('fileCta')(Primitives.span),
  Input: asBulmaVariant('fileInput')(makeInput('file')),
}

export const formBulmaVariants = asBulmaVariant
export const formCSSWithModifiers = lookup

export type FormVariants = Omit<Variants, Block>
export type FormBEM = BEM
