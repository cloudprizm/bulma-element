import { Theme } from '@hungry/bulma-styled-theme'
import * as React from 'react'
import { Layer } from '../src/Layer'
import { makeStory } from './bridge'

const stories = [
  {
    component: Theme.Provider,
    namespace: 'Layer',
    name: 'layers',
    props: {
      children: () => (
        <div style={{ width: 200, height: 200 }}>
          <Layer.dropdown
            width={100}
            minHeight={100}
            left={10}
            top={10}
            background="#FF0000"
          >dropdown
        </Layer.dropdown>
          <Layer.navbar
            width={100}
            minHeight={100}
            left={30}
            top={30}
            background="#00FF00"
          >
            navbar
          </Layer.navbar>
          <Layer.modal
            width={100}
            minHeight={100}
            left={50}
            top={50}
            background="#0000FF"
          >
            modal
          </Layer.modal>
        </div>
      )
    }
  },
].map(makeStory(module))
