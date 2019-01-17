import React, { MouseEventHandler, TouchEventHandler } from 'react'
import { Tag, Tags, TagVariants } from './Tag'

interface WithInteraction<K = any> {
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
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
      />
    </Tags>