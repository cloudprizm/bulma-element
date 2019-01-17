import * as React from 'react'
import { Button, SubmitButton } from '../src/Button'

// $ExpectError
const buttonWithNotExistingProp = <Button notExistingProp />

const okButton = <Button isActive p={10} />
const okButton2 = <SubmitButton isActive p={10} />
