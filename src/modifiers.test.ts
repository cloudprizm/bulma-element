import { combineCSSDefinitions } from './modifiers'

test('lookup with modifiers', () => {
  const lookup = combineCSSDefinitions(
    { isActive: 'isActive-css' },
    { isActive: 'isActive-outer' }
  )
  const css = lookup.isActive
  expect(css).toMatchSnapshot()
})