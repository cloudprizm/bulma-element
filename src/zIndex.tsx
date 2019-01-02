import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { zLayers } from '@hungry/bulma-theme'

// TODO
// two steps
// * increase theme layer
// * clone child and pass zIndex to style for child
const Layer = ({ children, theme, after, before }: { after?: 'ribbon', before?: 'ribbon' }) => {
  if (after) {
    const newZIndex = theme.layerIndex[after] + 1
    const newTheme = { ...theme, layerIndex: { ...theme.layerIndex, [after]: newZIndex } }
  }

  if (before) {
    const newZIndex = theme.layerIndex[after] - 1
  }

  return <ThemeProvider theme={theme}>
    <div style={{ zIndex: 1 }} >
      {children}
    </div>
  </ThemeProvider>
}