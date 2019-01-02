import { Theme } from '@hungry/bulma-styled-theme'
import * as React from 'react'
import { Notification } from './Notification'

export default [
  {
    component: Theme.Provider,
    namespace: 'Notification',
    name: 'basic',
    props: {
      children: (<>
        <Notification.Block isPrimary>
          <Notification.DeleteButton />
          Primar lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit
          </Notification.Block>
      </>
      )
    }
  },
]
