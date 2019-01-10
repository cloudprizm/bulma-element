import * as React from 'react'
import renderer from 'react-test-renderer'
import { Button, SubmitButton } from '../src/Button'

jest.mock('../src/modifiers', () => ({
  combineCSSDefinitions: () => ({}),
  combineCSSWithModifiers: () => ({
    isActive: 'isActive-css',
    isBlack: 'isBlack-css',
    button: 'asButton-css'
  })
}))

test('render basic button', () => {
  const component = (
    <Button p={10} fontSize={10} isActive isBlack disabled as="button">
      Dupa szatana!
    </Button>
  )
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render submit button', () => {
  const component = (
    <SubmitButton p={10} isActive>Dupa szatana!</SubmitButton>
  )

  const wrapper = renderer.create(component).toJSON()
  expect(wrapper).toMatchSnapshot()
})

// TODO investigate - why font size does not appear - most likely because fontSize is a function
// import { mount } from 'enzyme'
// mount(component)
// console.log('@@@', a)

// import styled from 'styled-components'
// import { render } from 'react-testing-library'
// import { fontSize } from 'styled-system'

//  expect(tree).toHaveStyleRule('fontSize', '10')
//  expect(tree).toHaveStyleRule('padding', '10')

// test.only('test basic styles', () => {
//   // ${p => fontSize(p)}
//   const Component = styled.button`
//     ${fontSize}
//     ${p => fontSize(p)}
//     fontSize: 10
//   `
//   const { container } = render(<Component fontSize={10} />)
//   console.log('@@@', container.firstChild)

//   // const tree = renderer.create(styled(<Cmp fontSize={10} />)``).toJSON()
//   // console.log('@@@ -->', tree)
//   // expect(tree).toHaveStyleRule('fontSize', '10')
// })
