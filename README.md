`@hungry/bulma-element`

Bulma elements in typescript with `styled-components` and `styled-system` features.

### How to run
`yarn start:showcase`

### Examples
- check `*.fixture.ts` files

### How to enable them in you project
- check `webpack.showcase.ts` file to get an insight what plugins are necessary to run it correctly.

### Why
Missing bridge between existing sass frameworks and js in css.
There are some implementation of `bulma` for ts, but typings seems to be very low resolution and most of them do not assume that every selector could be changed by bulma modifiers.

### Goals
provide thin layer of abstraction for css with preserving cascading behaviour - all modifiers can be applied to any component

### Example component
#### API
```ts
  <Button 
    // bulma modifiers
    isActive 
    isDanger 
    hasTextWarning 
    // styled components
    as="section"
    width={1}
    p={2}
  />
```

### How it works
### How it differentiate comparing to others
* there is no manual work involved in class names and everything is auto generated based upon sass

### Where is the rest of bulma components
This package is final, this is, all elements were exported, rest of bulma components would be provided in separate package.

### Contribution
TODO