import { layers } from '@hungry/bulma-theme'
import { identity, reduce } from '@core/fp-helpers'
import { style } from 'styled-system'

export const Layer = reduce((acc, val: string) => ({
  ...acc,
  [val]: style({
    prop: 'zIndex',
    getter: identity(val)
  })
}), {})