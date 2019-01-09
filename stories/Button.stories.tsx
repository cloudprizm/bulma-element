import { Theme } from '@hungry/bulma-styled-theme'
import * as React from 'react'
import { Button } from '../src/Button'

// const Tog = withToggle(({ open, toggleOpen, values, ...rest }) =>
//   <Button
//     {...rest}
//     isDanger={open}
//     onClick={() => toggleOpen(!open)}
//   >{
//       values[!!open]
//     }</Button>
// )

export default [
  {
    component: Theme.Provider,
    namespace: 'button',
    name: 'variants',
    props: {
      children: (
        <>
          {/* <Tog m={2} isRounded isLarge isWarning values={{ true: 'click me', false: 'yay!' }} /> */}
          <Button isActive isDanger hasTextWarning className="das" as="section">
            I'm normal
          </Button>
          <Button p={10} m={1} isWarning isLoading>Warning and loading</Button>
          <Button p={1} m={1} disabled isLoading>
            Loading & Disabled
          </Button>
        </>
      )
    }
  },
  // // without provider just from context
  // {
  //   component: Button,
  //   name: '',
  //   props: {
  //     variant: ['isPrimary'],
  //     children: 'Test'
  //   }
  // }
]
