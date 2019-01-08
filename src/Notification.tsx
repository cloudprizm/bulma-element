import {
  styledWithVariants,
  toStyledGenericFromStringOrJSX,
  div
} from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'

import CSS, { BEM } from './Notification.sass'

const asBulmaVariant =
  styledWithVariants<WithModifiers<BEM & { delete: boolean }>>(
    combineCSSWithModifiers(CSS))

const Block =
  asBulmaVariant('notification')
    (div)

const DeleteButton =
  asBulmaVariant('button', 'isDelete', 'delete')
    (toStyledGenericFromStringOrJSX('button'))

const Title =
  asBulmaVariant('title')
    (div)

const Subtitle =
  asBulmaVariant('subtitle')
    (div)

const Content =
  asBulmaVariant('content')
    (div)

export const Notification = {
  Block,
  DeleteButton,
  Title,
  Subtitle,
  Content
}