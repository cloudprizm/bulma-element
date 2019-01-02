import * as React from 'react'

import { Theme } from '@hungry/bulma-styled-theme'
import { Control, Field, Form, Help, Input, Label } from './Form'
import { CheckboxWithLabel, RadioWithLabel, UploadButton } from './Form.compound'

export default [
  {
    component: Theme.Provider,
    namespace: 'input',
    name: 'default',
    props: {
      children: (
        <Form p={2}>
          <Field>
            <Label>label with success</Label>
            <Input isSuccess />
          </Field>
          <Field>
            <Label isSmall>small label with input and error message</Label>
            <Input isDanger />
            <Help isDanger>error message</Help>
          </Field>
          <Field>
            <Label isLarge>large field with help message</Label>
            <Input isEmpty placeholder="some placeholder" />
            <Help>Some help message</Help>
            <CheckboxWithLabel isLarge checked onChange={() => { }}>checkbox with label</CheckboxWithLabel>
            <RadioWithLabel onChange={() => { }}>radio with label</RadioWithLabel>
          </Field>
          <Field>
            <Label>field with loading and checkbox</Label>
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
