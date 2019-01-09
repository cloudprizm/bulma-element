// temp
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

export const makeStory = module => ({
  component: WrapBy,
  namespace,
  name,
  props: { children }
}) =>
  storiesOf(namespace, module)
    .addDecorator(withKnobs)
    .add(name,
      withInfo({
        inline: true,
        header: false,
        propTables: false,
      })(
        () =>
          <WrapBy>
            {children()}
          </WrapBy>
      ))
