`@hungry/bulma-element`
====

Bulma elements in typescript with [`styled-components`](https://github.com/styled-components/styled-components) and [`styled-system`](https://github.com/jxnblk/styled-system) features.

[Showcase](https://hungry-consulting.github.io/bulma-element/).

### Why
* missing bridge between existing sass frameworks and js in css - creating any other special components based upon already defined rules
* `Bulma` provides great baseline for any component, but sometimes there is a need to override it within specific context, so this is why `style-components` and `styled-system` is used - avoid any css but give an ability to alter some experience
* there are some implementation of `bulma` for typescript, however typings for the time being seems to have very low resolution and most of them do not assume that every selector could be changed by bulma modifiers 
* provide thin layer of abstraction for css with preserving nature of CSS - all modifiers can be applied to any component - it is explicitly defined no auto magic assumption

### Demo
`yarn start:showcase`

### Examples
- check `*.fixture.ts` files

### How to enable them in you project
It is required to have defined some `loaders` for `webpack`, the minimal setup assume these:
```ts
  import {
    styleLoader, // style-loaders
    cssLoader,  // css-loader with some predefined css-modules setup
    sassLoader, // predefined sass-loader with include-paths and implementation defined
    } from '@hungry/webpack-parts'
```
You can pass them to your `sass` rules as is.
If you encounter any issues, you can check `webpack.showcase.ts` file to get full view how to run it - feel free to reuse this config as well.

### Example component
#### API

##### Primitives
```ts
  <Button 
    // bulma modifiers provided by sassy-react-component
    isActive 
    isDanger 
    hasTextWarning 
    // styled components feature
    as="section"
    // styled-system features
    width={1}
    p={2}
  />
```

##### BEM Blocks
There are some predefined `BEM` like components which contains more than one element. To differentiate them the most outer is called `Block`.

```ts
import { Notification } from '@hungry/bulma-element'

<Notification.Block isPrimary>
  <Notification.DeleteButton />
  Some Notification text
</Notification.Block>
```

### How it differentiate comparing to others
* there is no manual step besides the type definition and everything is auto generated based upon sass files - so any `bulma` updates can be done fully automatically

### Where is the rest of bulma components
This package is final, this is, all bulma elements were exported, bulma components would be provided as separate package.

### Contribution
TODO