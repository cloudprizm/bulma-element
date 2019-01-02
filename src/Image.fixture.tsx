import { Theme } from '@hungry/bulma-styled-theme'
import * as React from 'react'
import { Image } from './Image'

export default [
  {
    component: Theme.Provider,
    namespace: 'content',
    props: {
      children: (<>
        <Image
          is128X128
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </>
      )
    }
  },
]
