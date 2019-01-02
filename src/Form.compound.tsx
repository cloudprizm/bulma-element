import React, { Props, ComponentType, MouseEventHandler } from 'react'
import { AnyStyledComponent } from 'styled-components'
import { ComponentWithVariants, Primitives } from '@hungry/sassy-react-component'

import { Checkbox, Radio, File, Control, Input, formBulmaVariants, FormVariants } from './Form'

export const LoadableInput =
  ({ isLoading, ...rest }: { isLoading: boolean }) =>
    <Control isLoading={isLoading}>
      <Input {...rest} />
    </Control>

interface UploadButtonProps {
  icon: ComponentType
  isBoxed: boolean
  text: string
}

export const UploadButton =
  ({ icon, isBoxed, text, ...inputProps }: UploadButtonProps) =>
    <File.Block isBoxed={isBoxed} isPrimary>
      <File.Label>
        <File.Input {...inputProps} />
        <File.CTA>
          <File.Icon>{icon}</File.Icon>
          <File.InlineLabel>{text}</File.InlineLabel>
        </File.CTA>
      </File.Label>
    </File.Block>

const LabelForCheckbox = formBulmaVariants('checkboxLabel')(Primitives.label)
const LabelForRadio = formBulmaVariants('radioLabel')(Primitives.label)

type InputProps = {
  name?: string
  onChange?: MouseEventHandler<AnyStyledComponent>
  value?: any
  checked?: boolean
} & Props<any>

type WithLabel = {
  render?: (component: ComponentWithVariants, props: InputProps) => ComponentType
} & InputProps & FormVariants

const makeLabeledComponentWithRender =
  ([WrappedInput, Label]: [ComponentWithVariants, ComponentWithVariants]) =>
    ({ children, render, name, onChange, value, checked, ...rest }: WithLabel) =>
      <Label {...rest}>{
        render
          ? render(WrappedInput, { onChange, value, checked, children })
          : [<WrappedInput
            key='control'
            name={name}
            value={value}
            onChange={onChange}
            checked={checked}
          />, children]
      }</Label>

export const RadioWithLabel = makeLabeledComponentWithRender([Radio, LabelForRadio])
export const CheckboxWithLabel = makeLabeledComponentWithRender([Checkbox, LabelForCheckbox])