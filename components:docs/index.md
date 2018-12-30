---
title: StyledComponents
---

# Styled Utils usage
## Create a theme

A theme is a simple javascript object with only **top level keys**.

```ts


const Theme = {
    'hello': "blue"
}

```

## Create a themed styled function

```js
import {createThemedStyle} from 'styled-utils';
import rawStyled from 'styled-components'
// or import rawStyled from '@emotion/styled'

const styled = createThemedStyle<typeof Theme>(rawStyled)
```
Now you can use styled almost as usual, but with superpowers.

```.mdx
<div style={{ padding: '20px', backgroundColor: 'tomato' }}>
  <h4>Beep</h4>
</div>
```