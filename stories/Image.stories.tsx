import { Theme } from '@hungry/bulma-styled-theme'
import * as React from 'react'
import { Image } from '../src/Image'
import { makeStory } from './bridge'

const stories = [
  {
    component: Theme.Provider,
    namespace: 'Image',
    name: 'responsive image',
    props: {
      children: () => (<>
        <Image
          is128X128
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </>
      )
    }
  },
].map(makeStory(module))
