import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Theme } from '@hungry/bulma-styled-theme'
import { Button } from '../src/Button'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Button', withInfo({ inline: true, header: false, propTables: false })(() =>
    <Theme.Provider>
      <Button
        isActive={boolean('isActive', false)}
        isDanger={boolean('isDanger', false)}
        isLoading={boolean('isLoading', false)}
        isPrimary={boolean('isPrimary', false)}
        hasTextWarning={boolean('hasTextWarning', false)}
        m={number('margin', 2)}
        width={number('width', 100)}
        onClick={action('clicked')}
      >
        I'm normal
    </Button>
    </Theme.Provider>
  ))
