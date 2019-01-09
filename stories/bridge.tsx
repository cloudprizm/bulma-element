// temp
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

export const makeStory = (module: NodeModule) => ({
  component: WrapBy,
  namespace,
  name,
  props: { children }
}: {
  component: React.ComponentType<unknown>,
  namespace: string,
  name: string,
  props: { children: () => React.ReactChildren | React.ReactElement<unknown> }
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
