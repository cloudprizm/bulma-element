import React from 'react';

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Theme } from '@hungry/bulma-styled-theme'
import * as React from 'react'
import { Button } from '../src/Button'

storiesOf('Button', module)
  .add('danger button', () => (
    <Theme.Provider>
      <Button
        isActive
        isDanger
        hasTextWarning
        as="section"
        onClick={action('clicked')}
      >
        I'm normal
    </Button>
    </Theme.Provider>
  ))
