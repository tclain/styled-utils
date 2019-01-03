# Sass-like Utils to make developping emotion/styled-components components a breeze

## ThemedStyled

### Create a theme

A theme is a simple javascript object with only **top level keys**.

```ts
const Theme = {
  hello: 'blue'
}
```

### Create a themed styled function

```js
import { createThemedStyle } from 'styled-utils'
import rawStyled from 'styled-components'
// or import rawStyled from '@emotion/styled'

const styled = createThemedStyle < typeof Theme > rawStyled
```

Now you can use styled almost as usual, but with superpowers.

```.mdx
<div style={{ padding: '20px', backgroundColor: 'tomato' }}>
  <h4>Beep</h4>
</div>
```

## Dev

```bash
git clone https://github.com/tclain/styled-utils.git YOURFOLDERNAME
cd YOURFOLDERNAME

# Run npm install and write your library name when asked. That's all!
npm install
```

### NPM scripts

- `npm t`: Run test suite
- `npm start`: Run `npm run build` in watch mode
- `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `npm run test:prod`: Run linting and generate coverage
- `npm run build`: Generate bundles and typings, create docs
- `npm run lint`: Lints code
- `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)
