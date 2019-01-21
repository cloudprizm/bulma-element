import * as React from 'react'
import { string, object, ValidationError } from 'yup'

import {
  Form as FinalForm,
  Field as FormField,
  FormRenderProps,
  FieldProps,
  FieldRenderProps
} from 'react-final-form'

import {
  Button,
  Control,
  Field,
  Form,
  Help,
  Input,
  Label,
  Password,
  SubmitButton,
  Subtitle,
  Title
} from '../src'

const FormInput =
  ({ input, meta: { error }, ...rest }: FieldRenderProps) =>
    <Input
      {...input}
      {...rest}
      isDanger={!!error}
    />

const FormPassword =
  ({ input, meta: { error }, ...rest }: FieldRenderProps) =>
    <Password
      {...input}
      {...rest}
      isDanger={!!error}
    />

const ErrorMessage = ({ meta: { touched, error } }: FieldRenderProps) =>
  touched && error
    ? <Help isDanger>{error}</Help>
    : null

const ErrorField = ({ name }: FieldProps) =>
  <FormField
    name={name}
    subscribe={{ touched: true, error: true }}
    render={ErrorMessage}
  />

export const SignInUI = ({
  active,
  handleSubmit,
  reset,
  pristine,
  submitting,
  errors,
  values,
  ...rest
}: FormRenderProps) =>
  <Form
    width={1 / 2}
    onSubmit={e => handleSubmit(e as any)}
  >
    <Title>Login</Title>
    <Subtitle>provide your credentials</Subtitle>
    <Field>
      <Label
        isLarge
        hasTextPrimary={active === 'email'}
        hasTextDanger={!!errors.email}
      >name</Label>

      <Control >
        <FormField
          name="email"
          component={FormInput}
          isPrimary={active === 'email'}
        />
        <ErrorField name="email" />
      </Control>
    </Field>
    <Field>
      <Label
        isLarge
        hasTextPrimary={active === 'password'}
        hasTextDanger={!!errors.password}
      >password</Label>
      <Control>
        <FormField
          name="password"
          component={FormPassword}
          isPrimary={active === 'password'}
        />
        <ErrorField name="password" />
      </Control>
    </Field>
    <Field>
    </Field>
    <Field isGrouped isGroupedRight>
      <Control>
        <Button
          disabled={submitting}
          onClick={() => { }}
        >
          reset
        </Button>
      </Control>
      <Control>
        <SubmitButton
          isPrimary
          isLoading={submitting}
          onClick={e => { }}
        >
          submit
      </SubmitButton>
      </Control>
    </Field>
  </Form >

export type ValidationErrors = Record<string, string[]>
export const reduceValidationErrors =
  ({ inner }: ValidationError): ValidationErrors =>
    inner
      .map(d => ({ [d.path]: d.errors }))
      .reduce((acc, val) => ({ ...acc, ...val }), {})

export const validator = (values: any) =>
  object({
    email:
      string()
        .email()
        .required(),

    password:
      string()
      .required()
      .min(6)
      ,
  })
    .validate(values, { abortEarly: false })
    .then(_ => ({}))
    .catch(reduceValidationErrors)

export const SignInForm =
  () =>
    <FinalForm
      validate={validator}
      onSubmit={() => new Promise((res) => setTimeout(res, 1000))}
      initialValues={{ email: '', password: '' }}
      render={(renderProps: FormRenderProps) =>
        <SignInUI {...renderProps} />}
    />