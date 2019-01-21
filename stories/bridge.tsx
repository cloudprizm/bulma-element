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
  component: React.FunctionComponent<any>,
  namespace: string,
  name: string,
  props: { children: () => JSX.Element }
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
