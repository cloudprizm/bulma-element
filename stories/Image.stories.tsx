import { Theme } from '@hungry/bulma-styled-theme'
import * as React from 'react'
import { Image } from '../src/Image'
import { Box } from '../src/Box'
import { makeStory } from './bridge'

const stories = [
  {
    component: Theme.Provider,
    namespace: 'Image',
    name: 'responsive image',
    props: {
      children: () => (<div>
        <Box
          m={2}
          isPaddingless
          >
          <Image
            is128X128
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </Box>
        <Box
          m={2}
          isRadiusless
        >
          <Image
            is16By9
            isRadiusless
            src="https://bulma.io/images/placeholders/256x256.png"
          />
        </Box>
      </div>
      )
    }
  },
].map(makeStory(module))
