import { Primitives, BaseStyle } from '@hungry/sassy-react-component'
import { FunctionComponent } from 'react'
import { zLayers } from '@hungry/bulma-theme'
import { styled } from '@hungry/bulma-styled-theme'
import {
  compose,
  position,
  left,
  right,
  top,
  bottom,
  background,
  BackgroundProps,
  LeftProps,
  RightProps,
  TopProps,
  BottomProps,
  PositionProps
} from 'styled-system'

type LayerProps =
  & BackgroundProps
  & LeftProps
  & RightProps
  & TopProps
  & BottomProps
  & PositionProps

type Layers = Record<
  keyof typeof zLayers,
  FunctionComponent<BaseStyle & LayerProps>
>

const layerStyleHandlers = compose(
  position,
  left,
  right,
  top,
  bottom,
  background
)

export const Layer =
  Object
    .keys(zLayers)
    .reduce((layers, layerName) => ({
      ...layers,
      [layerName]:
        styled(Primitives.div)
          .attrs({
            zIndex: zLayers[layerName] as number,
            position: 'absolute'
          })`${layerStyleHandlers}`

    }), {}) as Layers