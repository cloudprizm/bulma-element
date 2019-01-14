import * as React from 'react'
import { Button } from '../src/Button'

// $ExpectError
const buttonWithNotExistingProp = <Button notExistingProp />
const okButton = <Button isActive p={10} type="submit" />
