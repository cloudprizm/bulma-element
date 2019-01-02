import * as React from 'react'

import { Theme } from '@hungry/bulma-styled-theme'
import { Control, Field, Form, Help, Input, Label } from './Form'
import { CheckboxWithLabel, RadioWithLabel } from './Form.compound'

export default [
  {
    component: Theme.Provider,
    namespace: 'input',
    name: 'default',
    props: {
      /* Cosmos is shouting about fragment shorthand */
      children: (
        <Form p={2}>
          <Field>
            <Label>Kiedy zielone swiatlo i mozna jechac, np. walidacja</Label>
            <Input isSuccess />
          </Field>
          <Field>
            <Label isSmall>Kiedy error nastanie</Label>
            <Input isDanger />
            <Help isDanger>Jakis tam error</Help>
          </Field>
          <Field>
            <Label isLarge>Kiedy jest pusty z podpowiedzia</Label>
            <Input isEmpty placeholder="test" />
            <Help>Jakis tam super pomocny tekst</Help>
            <CheckboxWithLabel isLarge checked onChange={() => { }}>dupa szatana</CheckboxWithLabel>
            <RadioWithLabel onChange={() => { }}>dupa szatana</RadioWithLabel>
          </Field>
          <Field>
            <Label>Kiedy sie cos bedzie ladowac, lub na cos czekac</Label>
            <Control isLoading>
              <Input isSuccess />
              <CheckboxWithLabel onChange={() => { }}>Remember me</CheckboxWithLabel>
            </Control>
          </Field>
        </Form>
      )
    }
  }
]
