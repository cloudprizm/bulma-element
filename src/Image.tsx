import React from 'react'
import { styledWithVariants, toStyledGenericFromStringOrJSX } from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'

import CSS, { BEM } from './Image.sass'

const withBulma =
  styledWithVariants<WithModifiers<BEM>>(
    combineCSSWithModifiers(CSS))

const FigureWithImage =
  toStyledGenericFromStringOrJSX<{ src: string, alt: string }>(
    ({ src, alt, ...props }) =>
      <figure {...props}>
        <img
          src={src}
          alt={alt}
        />
      </figure>)

export const Image = withBulma('image')(FigureWithImage)
