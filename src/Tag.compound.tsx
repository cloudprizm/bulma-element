import React, { MouseEventHandler, TouchEventHandler } from 'react'
import { AnyStyledComponent } from 'styled-components'
import { Tag, Tags, TagVariants } from './Tag'

interface WithInteraction<K = AnyStyledComponent> {
  onTouchEnd: TouchEventHandler<K>
  onClick: MouseEventHandler<K>
  onMouseDown: MouseEventHandler<K>
}

export const DeletableTag =
  ({ onTouchEnd, onClick, onMouseDown, ...props }: Partial<WithInteraction & TagVariants>) =>
    <Tags hasAddons>
      <Tag {...props} />
      <Tag
        as="a"
        isDelete
        onClick={onClick}
        onMouseDown={onMouseDown}
        onTouchEnd={onTouchEnd}
      />
    </Tags>