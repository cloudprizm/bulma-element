`@hungry/bulma-element`
Bulma elements in typescript with `styled-components` and `styled-system` features.

### Why
There is a lot of cool sass frameworks and adopting them from stratch seems to be always cumbersone. 
There is a lots of tutorial how to switch from sass to jscss, but all assume direct port which is bug prone.
Missing was the bridge between these two worlds.

### Goals
no need to define css at all
provide thin layer of abstraction for css with preserving cascading behaviour (all modifiers can be applied to any component) - two goals, in bigger teams where separate team is involved and there is already defined framework css

### Example component
#### API
```ts
  <Button 
    isActive 
    isDanger 
    hasTextWarning 
    as="section"
    width={1}
    p={2}
  />
```

### How it works
### How it differentiate comparing to others
* there is no manual work involved in class names and everything is auto generated based upon sass

### Where is the rest of bulma components
This package is final, this is all elements were exported, rest of them would be provided in separate package.

### Contribution
TODO