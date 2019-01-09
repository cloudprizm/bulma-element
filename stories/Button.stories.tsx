import * as React from 'react'

import { Theme } from '@hungry/bulma-styled-theme'
import { Button } from '../src/Button'
import { action } from '@storybook/addon-actions'
import { makeStory } from './bridge'
import { text, boolean, number } from '@storybook/addon-knobs'

const stories = [
  {
    component: Theme.Provider,
    namespace: 'Button',
    name: 'button variants',
    props: {
      children: () => (
        <Button
          isActive={boolean('isActive', false)}
          isDanger={boolean('isDanger', false)}
          isLoading={boolean('isLoading', false)}
          isPrimary={boolean('isPrimary', false)}
          hasTextWarning={boolean('hasTextWarning', false)}
          m={number('margin', 2)}
          width={number('width', 100)}
          onClick={action('clicked')}
        >{text('text', 'awesome!')}
        </Button>
      )
    }
  },
]

stories.map(makeStory(module))