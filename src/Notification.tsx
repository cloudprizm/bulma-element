import {
  styledWithVariants,
  button,
  div
} from '@hungry/sassy-react-component'

import { combineCSSWithModifiers, WithModifiers } from './modifiers'

import CSS, { BEM } from './Notification.sass'

// INFO / TODO: delete is reserved keyword and is filtered out during building sass.d.ts
const asBulmaVariant =
  styledWithVariants<WithModifiers<BEM & { delete: boolean }>>(
    combineCSSWithModifiers(CSS as typeof CSS & { delete: string }))

const Block =
  asBulmaVariant('notification')
    (div)

const DeleteButton =
  asBulmaVariant('button', 'isDelete', 'delete')
    (button)

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