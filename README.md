# Rift UI

Rift is a swift-ui inspired framework for the web.

**This is just a concept**

Performance has not been considered for this project, it's just for fun!

## Installation

`npm i rift-ui --save`
or
`yarn add rift-ui`

## Usage

```
import {Root, View, Text} from 'rift-ui'

const App = View(
  Text('Welcome to my app!', 'h1').fontSize('20px').color('red'),
  Text('It rocks...'),
  Button('Click Me').onClick(() => console.log('wow'))
)

Root(document.getElementById('root), App)
```

### Components

```
import {
  Component, // Base component class for extending new HTML element types
  Root,
  View,
  Text,
  Button,
  Img,
  ForEach,
  If,
  Stack,
  HStack,
  VStack
}
```

### Styling

Styling can be chained onto components like so:

```
  Text('My Text')
    .color('red')
    .borderRadius('200px')
    .height('100px')
```

### State

Functional components are injected with state like so:

```
  const MyComponent = (state = initialState, setState) => {
    return Text(state.text).onClick(() => {
      setState({
        text: 'wow!'
      })
    })
  }

  const App = View(
    MyComponent
  )
```

### Props

```
  const MyComponent = (...props) => {
    return Text(props.text)
  }

  const App = View(
    MyComponent(props here...)
  )
```

### Props & State

```
  const MyComponent = (...props) => (state = initialState, setState) => {
    // use state here
    return Text(props.text)
  }

  const App = View(
    MyComponent(props here...)
  )
```

### Events

Current only the onClick event is supported:

```
  Text('My Text')
    .onClick(myFunction)
```

### Attributes

There is a special .attr method for adding attributes to an element:

```
  Text('My Text')
    .attr('data-thing', true)
```

### Method Components

Rift UI currently supports `ForEach` and `If` components, used like so:

```
  const App = View(
    ForEach(array, (item) => Text(Item)),
    If(thingIsTrue, Text('It is true!'))
  )
```
