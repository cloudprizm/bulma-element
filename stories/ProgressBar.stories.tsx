import { Theme } from '@hungry/bulma-styled-theme'
import * as React from 'react'
import { ProgressBar } from '../src/ProgressBar'

export default [
  {
    component: Theme.Provider,
    namespace: 'Progress',
    name: 'basic',
    props: {
      children: (<>
        <ProgressBar value={15} max={100} isDanger />
        <ProgressBar value={50} max={100} isWarning />
        <ProgressBar value={80} max={100} isPrimary />
      </>
      )
    }
  },
]
