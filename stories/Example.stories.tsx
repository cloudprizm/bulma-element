import * as React from 'react'

import { Theme } from '@hungry/bulma-styled-theme'
import { SignInForm } from '../example/form'
import { makeStory } from './bridge'

const stories = [
  {
    component: Theme.Provider,
    namespace: 'Examples',
    name: 'Form',
    props: {
      children: () => (<SignInForm />)
    }
  }
]

stories.map(makeStory(module))