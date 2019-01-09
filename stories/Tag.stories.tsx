import { Theme } from '@hungry/bulma-styled-theme'
import * as React from 'react'
import { Control, Field } from '../src/Form'
import { Tag, Tags } from '../src/Tag'
import { DeletableTag } from '../src/Tag.compound'

export default [
  {
    component: Theme.Provider,
    namespace: 'Tag',
    name: 'colors & simple',
    props: {
      children: (<>
        <Tags>
          <Tag isBlack>isBlack</Tag>
          <Tag isDark>isDark</Tag>
          <Tag isLight>isLight</Tag>
          <Tag isWhite>isWhite</Tag>
          <Tag isPrimary>isPrimary</Tag>
          <Tag isLink>isLink</Tag>
          <Tag isInfo>isIfo</Tag>
          <Tag isSuccess>isSuccess</Tag>
          <Tag isWarning>isWarning</Tag>
          <Tag isDanger>isDanger</Tag>
        </Tags>
      </>
      )
    }
  },
  {
    component: Theme.Provider,
    namespace: 'Tag',
    name: 'complex',
    props: {
      children: (<>
        <Field isGrouped isGroupedMultiline>
          <Control>
            <DeletableTag isLink>flat</DeletableTag>
          </Control>
          <Control>
            <DeletableTag isBlack>is black</DeletableTag>
          </Control>
          <Control>
            <DeletableTag isDanger>is danger</DeletableTag>
          </Control>
          <Control>
            <DeletableTag isWarning>is warning</DeletableTag>
          </Control>
        </Field>
      </>
      )
    }
  },
]
